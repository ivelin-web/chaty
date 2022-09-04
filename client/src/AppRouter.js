import React, { lazy, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "@Context/user/userContext";

// Lazy load pages
const Chat = lazy(() => import("@Pages/chat"));
const SetAvatar = lazy(() => import("@Pages/setAvatar"));
const Login = lazy(() => import("@Pages/login"));
const Register = lazy(() => import("@Pages/register"));

export default function AppRouter() {
    const { user } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={user ? <Chat /> : <Navigate to="/login" />} />
            <Route path="/setAvatar" element={user ? <SetAvatar /> : <Navigate to="/login" />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
