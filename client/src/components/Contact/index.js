import React, { useContext, useEffect, useState } from "react";
import UnreadMessage from "@Components/UnreadMessage";
import NoAvatar from "@Assets/no-avatar.svg";
import { UserContext } from "@Context/user/userContext";
import SocketService from "@Services/socket";
import { UpdateUser } from "../../context/user/userActions";

export default function Contact({ contact, user }) {
    const { dispatch, user: currentUser } = useContext(UserContext);

    const checkIfContactHasUnreadMessages = () => {
        return contact && currentUser && currentUser.unreadMessages.includes(contact._id);
    }

    const img = user ? <img src={`data:image/svg+xml;base64,${user.avatarImage}`} alt="avatar" /> : <img src={contact.avatarImage ? `data:image/svg+xml;base64,${contact.avatarImage}` : NoAvatar} alt="avatar" />;
    const usernameHeading = user ? <h2>{user.username}</h2> : <h3>{contact.username}</h3>;

    useEffect(() => {
        SocketService.socket.on("unread-msg-receive", (updatedUser) => {
            dispatch(UpdateUser(updatedUser));
        });

        return () => {
            SocketService.socket.off("unread-msg-receive");
        }
    }, [contact])

    return (
        <>
            <div className="avatar">{img}</div>
            <div className="username">{usernameHeading}</div>
            {checkIfContactHasUnreadMessages() && <UnreadMessage text={"NEW"} />}
        </>
    );
}
