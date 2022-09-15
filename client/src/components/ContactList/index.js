import React, { useContext } from "react";
import { UserContext } from "@Context/user/userContext";
import Container from "@Components/Containers/ContactList";
import Logo from "@Assets/logo.svg";
import Contact from "@Components/Contact";

export default function ContactList({ contacts, onChatChange, currentChat }) {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <div className="brand">
                <img src={Logo} alt="logo" />
                <h3>chaty</h3>
            </div>
            <div className="contacts">
                {contacts.map((contact) => {
                    return (
                        <div onClick={() => onChatChange(contact)} key={contact._id} className={`contact ${contact._id === currentChat?._id ? "selected" : ""}`}>
                            <Contact contact={contact} />
                        </div>
                    );
                })}
            </div>
            <div onClick={() => onChatChange(null)} className="currentUser">
                <Contact user={user} />
            </div>
        </Container>
    );
}
