import styled from "styled-components";

const Container = styled.div`
    width: 25%;
    display: grid;
    padding-top: 1rem;
    grid-template-rows: 10% 78% 12%;
    overflow: hidden;
    background: #090424;
    @media screen and (max-width: 1080px) {
        width: 15%;
        grid-template-rows: 15% 70% 15%;
    }
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
            height: 2rem;
        }
        h3 {
            color: #fff;
            text-transform: uppercase;
        }
        @media screen and (max-width: 1080px) {
            h3 {
                display: none;
            }
        }
    }
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 1rem;
        padding: 1rem 0;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
                background: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        .contact {
            background: #ffffff39;
            min-height: 4.5rem;
            width: 90%;
            cursor: pointer;
            border-radius: 0.2rem;
            padding: 0.4rem;
            gap: 1rem;
            align-items: center;
            display: flex;
            transition: 0.5s ease-in-out;
            position: relative;
            @media screen and (max-width: 1080px) {
                justify-content: center;
                min-height: 4rem;
                background: none;
            }
            .avatar {
                img {
                    height: 3rem;
                }
            }
            .username {
                h3 {
                    color: #fff;
                }
                @media screen and (max-width: 1080px) {
                    display: none;
                }
            }
        }
        .selected {
            background: #9186f3;
        }
    }
    .currentUser {
        padding: 0.5rem;
        background: #0d0d30;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        cursor: pointer;
        .avatar {
            img {
                height: 50px; 
                max-inline-size: 100%;
            }
        }
        .username {
            h2 {
                color: #fff;
            }
            @media screen and (max-width: 1080px) {
                display: none;
            }
        }
    }
`;

export default Container;
