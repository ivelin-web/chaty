import React, { useEffect, useState } from "react";
import Container from "@Components/Containers/UserChat";
import NoAvatar from "@Assets/no-avatar.svg";
import Logout from "@Components/Logout";
import ChatInput from "@Components/ChatInput";
import { sendMessage, getMessages } from "@Services/message";
import SocketService from "@Services/socket";

export default function UserChat({ currentChat }) {
    const [messages, setMessages] = useState([]);
    const [isMessagesFetching, setIsMessagesFetching] = useState(true);

    useEffect(() => {
        SocketService.socket.on("msg-receive", (message) => {
            setMessages((prev) => {
                return [...prev, message];
            });
        });
    }, []);

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
                SocketService.socket.emit("send-msg", {
                    message: data,
                    recipient: currentChat._id,
                });

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
                        <div key={message._id}>
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
