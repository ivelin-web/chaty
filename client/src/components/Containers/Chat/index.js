import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background: #131324;
    .container {
        height: 85vh;
        width: 85vw;
        background: #00000076;
        display: flex;
        @media screen and (max-width: 600px) {
            height: 100vh;
            width: 100vw;
        }
    }
`;

export default Container;
