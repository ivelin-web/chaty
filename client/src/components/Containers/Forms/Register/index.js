import styled from "styled-components";

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background: #131324;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: #fff;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        background: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
        @media screen and (max-width: 600px) {
            height: 100vh;
            width: 100vw;
        }
        div {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            input {
                background: transparent;
                padding: 1rem;
                border: 0.1rem solid #4e0eff;
                border-radius: 0.4rem;
                color: #fff;
                with: 100%;
                font-size: 1rem;
                &:focus {
                    border: 0.1rem solid #997af0;
                    outline: none;
                }
            }
            button {
                background: #997af0;
                color: #fff;
                padding: 1rem 2rem;
                border: none;
                font-weight: bold;
                cursor: pointer;
                border-radius: 0.4rem;
                font-size: 1rem;
                text-transform: uppercase;
                transition: background 0.5s ease-in-out;
                &:hover {
                    background: #4e0eff;
                }
            }
            span {
                display: flex;
                gap: 1rem;
                justify-content: space-between;
                color: #fff;
                text-transform: uppercase;
                @media screen and (max-width: 500px) {
                    flex-direction: column;
                    gap: 0.3rem;
                }
                a {
                    color: #4e0eff;
                    text-decoration: none;
                    font-weight: bold;
                }
            }
            span.errorText {
                color: #e00;
                font-weight: 300;
                font-size: 0.9rem;
                text-transform: none;
                margin-top: -1rem;
            }
        }
    }
`;

export default FormContainer;
