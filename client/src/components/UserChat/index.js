import React from "react";
import Container from "@Components/Containers/UserChat";
import NoAvatar from "@Assets/no-avatar.svg";
import Logout from "@Components/Logout";
import ChatInput from "@Components/ChatInput";

export default function UserChat({ currentChat }) {
    const handleSendMessage = (message) => {
        alert(message);
    };

    return (
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
            <div className="chatMessages"></div>
            <ChatInput onSendMessage={handleSendMessage} />
        </Container>
    );
}
