import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background: #131324;
    height: 100vh;
    width: 100vw;
    .loader {
        max-inline-size: 100%;
    }
    .titleContainer {
        h1 {
            color: #fff;
        }
    }
    .avatars {
        display: flex;
        gap: 2rem;
        .avatar {
            border: 0.4rem solid transparent;
            padding: 0.4rem;
            border-radius: 5rem;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            img {
                height: 6rem;
            }
        }
        .selected {
            border: 0.4rem solid #4e0eff;
        }
    }
    .submitBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #997af0;
        color: #fff;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover {
            background: #4e0eff;
        }
    }
`;

export default Container;
