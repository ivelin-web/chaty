import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background: #080420;
    padding: 0.2rem;
    padding-bottom: 0.3rem;
    .buttonContainer {
        display: flex;
        align-items: center;
        color: #fff;
        gap: 1rem;
        .emoji {
            position: relative;
            margin-left: 1rem;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
            .emoji-picker-react {
                position: absolute;
                top: -350px;
                background: #080420;
                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9186f3;
                .emoji-scroll-wrapper::-webkit-scrollbar {
                    background: #080420;
                    width: 5px;
                    &-thumb {
                        background: #9186f3;
                    }
                }
                .emoji-categories {
                    button {
                        filter: contrast(0);
                    }
                }
                .emoji-search {
                    background: transparent;
                    border-color: #9186f3;
                }
                .emoji-group:before {
                    background: #080420;
                }
            }
        }
    }
    .inputContainer {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-content: center;
        gap: 2rem;
        background: #ffffff34;
        input {
            width: 90%;
            background: transparent;
            color: #fff;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection {
                background: #9186f3;
            }
            &:focus {
                outline: none;
            }
        }
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex
            justify-content: center;
            align-items: center;
            background: #9a86f3;
            border: none;
            cursor: pointer;
            svg {
                font-size: 2rem;
                color: #fff;
            }
        }
    }
`;

export default Container;
