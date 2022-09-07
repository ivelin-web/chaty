import React, { useContext } from "react";
import Robot from "@Assets/robot.gif";
import Container from "@Components/Containers/Welcome";
import { UserContext } from "@Context/user/userContext";

export default function Welcome() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span>{user.username}!</span>
            </h1>
            <h3>Please select a chat to Start Messaging.</h3>
        </Container>
    );
}
