import styled from "styled-components";

const Container = styled.span`
    &.badge {
        position: absolute;
        top: -7px;
        right: 4px;
        padding: 2px 2px;
        border-radius: 20%;
        background: #090424;
        color: #fff;
        @media screen and (max-width: 1080px) {
            font-size: 0.75rem;
        }
        @media screen and (max-width: 768px) {
            font-size: 0.65rem;
        }
        @media screen and (max-width: 500px) {
            font-size: 0.6rem;
        }
        @media screen and (max-width: 400px) {
            font-size: 0.55rem;
        }
    }
`;

export default Container;
