import styled from "styled-components";

const Container = styled.div`
    padding-top: 1rem;
    display: grid;
    grid-template-rows: 10% 78% 12%;
    .chatHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
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
