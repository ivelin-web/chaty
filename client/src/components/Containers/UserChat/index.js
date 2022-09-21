import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    padding-top: 1rem;
    display: grid;
    grid-template-rows: 10% 78% 12%;
    gap: 0.1rem;
    overflow: hidden;
    @media screen and (max-width: 1080px) {
        grid-template-rows: 15% 70% 15%;
        width: 85%;
    }
    .chatHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        @media screen and (max-width: 768px) {
            padding: 0 1.5rem;
        }
        @media screen and (max-width: 500px) {
            padding: 0 1rem;
        }
        .userDetails {
            display: flex;
            align-items: center;
            gap: 1rem;
            .avatar {
                img {
                    height: 3rem;
                }
            }
            .username {
                h3 {
                    color: #fff;
                }
            }
        }
    }
    .chatMessages {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
                background: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        @media screen and (max-width: 768px) {
            padding: 0 1.5rem;
        }
        @media screen and (max-width: 500px) {
            padding: 0 1rem;
        }
        .message {
            display: flex;
            align-items: center;
            .content {
                max-width: 40%;
                overflow-wrap: break-word;
                padding: 1rem;
                font-size: 1.1rem;
                border-radius: 1rem;
                color: #d1d1d1;
            }
            @media screen and (max-width: 768px) {
                p {
                    font-size: 1rem;
                }
            }
            @media screen and (max-width: 500px) {
                p {
                    font-size: 0.9rem;
                }
            }
        }
        .sended {
            justify-content: flex-end;
            .content {
                background: #4f04ff21;
            }
        }
        .received {
            justify-content: flex-start;
            .content {
                background: #9900ff20;
            }
        }
    }
`;

export default Container;
