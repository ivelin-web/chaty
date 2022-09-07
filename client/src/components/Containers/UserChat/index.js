import styled from "styled-components";

const Container = styled.div`
    padding-top: 1rem;
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
`;

export default Container;
