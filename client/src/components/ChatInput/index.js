import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import Container from "@Components/Containers/ChatInput";

export default function ChatInput({ onSendMessage }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker((prev) => {
            return !prev;
        });
    };

    const handleEmojiClick = (event, emoji) => {
        setMessage((prev) => {
            return prev + emoji.emoji;
        });
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (message.length > 0) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <Container>
            <div className="buttonContainer">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="inputContainer">
                <input onChange={handleMessageChange} value={message} type="text" placeholder="type your message here" />
                <button className="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
    );
}
