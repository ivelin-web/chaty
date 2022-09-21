import React from "react";
import Container from "@Components/Containers/UnreadMessage";

export default function UnreadMessage({text}) {
    return (
        <Container className="badge">
            {text}
        </Container>
    );
}
