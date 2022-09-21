import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    gap: 0.5rem;
    padding: 0 1rem;
    @media screen and (max-width: 1080px) {
        width: 85%;
    }
    img {
        height: 20rem;
    }
    h1 {
        text-align: center;
    }
    h3 {
        text-align: center;
    }
    span {
        color: #4e00ff;
    }
`;

export default Container;
