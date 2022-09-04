import React from "react";
import NoAvatar from "@Assets/no-avatar.svg";

export default function Contact({ contact, user }) {
    const img = user ? <img src={`data:image/svg+xml;base64,${user.avatarImage}`} alt="avatar" /> : <img src={contact.avatarImage ? `data:image/svg+xml;base64,${contact.avatarImage}` : NoAvatar} alt="avatar" />;
    const usernameHeading = user ? <h2>{user.username}</h2> : <h3>{contact.username}</h3>;

    return (
        <>
            <div className="avatar">{img}</div>
            <div className="username">{usernameHeading}</div>
        </>
    );
}
