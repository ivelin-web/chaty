import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainers/Register";
import Logo from "../../assets/logo.svg";
import { register } from "../../services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        register(state)
            .then((res) => {
                toast.success(res.data.message);
                navigate("/login");
            })
            .catch(({ response: err }) => {
                setIsLoading(false);
                setErrors(err?.data?.errors || {});
            });
    };

    const handleChange = (e) => {
        setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <>
            <FormContainer>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>chaty</h1>
                    </div>
                    <input value={state.username} type="text" placeholder="Username" name="username" onChange={handleChange} />
                    {errors?.username?.message && <span className="errorText">{errors.username.message}</span>}
                    <input value={state.email} type="email" placeholder="Email" name="email" onChange={handleChange} />
                    {errors?.email?.message && <span className="errorText">{errors.email.message}</span>}
                    <input value={state.password} type="password" placeholder="Password" name="password" onChange={handleChange} />
                    {errors?.password?.message && <span className="errorText">{errors.password.message}</span>}
                    <input value={state.confirmPassword} type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                    {errors?.confirmPassword?.message && <span className="errorText">{errors.confirmPassword.message}</span>}
                    <button type="submit">{isLoading ? "Loading..." : "Register"}</button>
                    <span>
                        already have an account ? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
        </>
    );
}
