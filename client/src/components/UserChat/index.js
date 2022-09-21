import React, {useContext, useEffect, useRef, useState} from "react";
import Container from "@Components/Containers/UserChat";
import NoAvatar from "@Assets/no-avatar.svg";
import Logout from "@Components/Logout";
import ChatInput from "@Components/ChatInput";
import { sendMessage, getMessages } from "@Services/message";
import SocketService from "@Services/socket";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "@Context/user/userContext";
import {UpdateUser} from "@Context/user/userActions";
import { deleteUnreadMessage } from "@Services/user";

export default function UserChat({ currentChat }) {
    const [messages, setMessages] = useState([]);
    const [isMessagesFetching, setIsMessagesFetching] = useState(true);
    const { dispatch, user } = useContext(UserContext);
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, [messages]);

    useEffect(() => {
        SocketService.socket.on("msg-receive", (message) => {
            if (message.sender === currentChat._id) {
                deleteUnreadMessage(currentChat._id)
                    .then(({ data }) => {
                        dispatch(UpdateUser(data));
                    })
                    .catch(({ response: err }) => {
                        console.log(err);
                    });

                setMessages((prev) => {
                    return [...prev, message];
                });
            }
        });

        return () => {
            SocketService.socket.off("msg-receive");
        };
    }, [currentChat]);

    useEffect(() => {
        setIsMessagesFetching(true);

        getMessages(currentChat._id)
            .then(({ data }) => {
                setMessages(data);
            })
            .catch(({ response: err }) => {
                console.log(err);
            })
            .finally(() => {
                setIsMessagesFetching(false);
            });
    }, [currentChat]);

    const handleSendMessage = (message) => {
        if (message.trim().length === 0) {
            return;
        }

        const payload = {
            text: message,
            recipient: currentChat._id,
        };

        sendMessage(payload)
            .then(({ data }) => {
                setMessages((prev) => {
                    return [...prev, data];
                });
            })
            .catch(({ response: err }) => {
                console.log(err);
            });
    };

    return isMessagesFetching ? null : (
        <Container>
            <div className="chatHeader">
                <div className="userDetails">
                    <div className="avatar">
                        <img src={currentChat.avatarImage ? `data:image/svg+xml;base64,${currentChat.avatarImage}` : NoAvatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout />
            </div>
            <div className="chatMessages">
                {messages.map((message) => {
                    return (
                        <div ref={scrollRef} key={uuidv4()}>
                            <div className={`message ${message.sender === currentChat._id ? "received" : "sended"}`}>
                                <div className="content">
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ChatInput currentChat={currentChat} onSendMessage={handleSendMessage} />
        </Container>
    );
}
