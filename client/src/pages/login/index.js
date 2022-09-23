import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "@Components/Containers/Forms/Login";
import Logo from "@Assets/logo.svg";
import { getAuthUser, login } from "@Services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "@Context/user/userContext";
import { Login as LoginAction } from "@Context/user/userActions";

export default function Login() {
    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        login(state)
            .then((res) => {
                getAuthUser()
                    .then((userRes) => {
                        toast.success(res.data.message);
                        dispatch(LoginAction(userRes.data));
                        navigate("/");
                    })
                    .catch(({ response: err }) => {
                        setIsLoading(false);
                        toast.error(err.data?.message);
                    });
            })
            .catch(({ response: err }) => {
                setIsLoading(false);
                toast.error(err.data?.message);
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
                <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>chaty</h1>
                    </div>
                    <div>
                        <input value={state.username} type="text" placeholder="Username" name="username" onChange={handleChange} />
                        <input value={state.password} type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
                        <span>
                            Don't have an account ? <Link to="/register">Register</Link>
                        </span>
                    </div>
                </form>
            </FormContainer>
        </>
    );
}
