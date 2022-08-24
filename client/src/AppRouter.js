import React, { lazy, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/user/UserContext";

// Lazy load pages
const Chat = lazy(() => import("./pages/chat/Chat"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

export default function AppRouter() {
    const { user } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={user ? <Chat /> : <Navigate to="/login" />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
    );
}
