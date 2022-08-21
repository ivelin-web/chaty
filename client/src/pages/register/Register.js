import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    const handleChange = (e) => {};

    return (
        <>
            <FormContainer>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>chaty</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                    <button type="submit">Create User</button>
                    <span>
                        already have an account ? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
        </>
    );
}

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
        background: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem;
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
            color: #fff;
            text-transform: uppercase;
            a {
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`;
