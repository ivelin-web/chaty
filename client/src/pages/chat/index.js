import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@Context/user/userContext";
import { useNavigate } from "react-router-dom";
import Container from "@Components/Containers/Chat";
import { getUsers, deleteUnreadMessage } from "@Services/user";
import ContactList from "@Components/ContactList";
import Welcome from "@Components/Welcome";
import UserChat from "@Components/UserChat";
import SocketService from "@Services/socket";
import {UpdateUser} from "@Context/user/userActions";

export default function Chat() {
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const { dispatch, user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return;
        }

        SocketService.socket.emit("add-user", user._id);
    }, []);

    useEffect(() => {
        if (!user.isAvatarImageSet) {
            navigate("/setAvatar");
            return;
        }

        getUsers()
            .then(({ data }) => {
                setContacts(data);
            })
            .catch(({ response: err }) => {
                console.log(err);
            });
    }, [user.isAvatarImageSet]);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);

        if (chat && user.unreadMessages.includes(chat._id)) {
            deleteUnreadMessage(chat._id)
                .then(({ data }) => {
                    dispatch(UpdateUser(data));
                })
                .catch(({ response: err }) => {
                    console.log(err);
                });
        }
    };

    return (
        <Container>
            <div className="container">
                <ContactList currentChat={currentChat} onChatChange={handleChatChange} contacts={contacts} />
                {currentChat ? <UserChat currentChat={currentChat} /> : <Welcome />}
            </div>
        </Container>
    );
}
