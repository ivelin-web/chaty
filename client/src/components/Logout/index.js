import React, { useContext } from "react";
import { logout } from "@Services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiPowerOff } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "@Context/user/userContext";
import { UpdateUser } from "@Context/user/userActions";

export default function Logout() {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    const handleLogout = () => {
        logout()
            .then(({ data }) => {
                toast.success(data.message);
                dispatch(UpdateUser(null));
                navigate("/login");
            })
            .catch(({ response: err }) => {
                toast.error(err);
            });
    };

    return (
        <Button onClick={handleLogout}>
            <BiPowerOff />
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: #9a86f3;
    cursor: pointer;
    svg {
        font-size: 1.3rem;
        color: #ebe7ff;
    }
`;
