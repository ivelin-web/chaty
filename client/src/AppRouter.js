import React, { lazy, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/user/userContext";

// Lazy load pages
const Chat = lazy(() => import("./pages/chat"));
const SetAvatar = lazy(() => import("./pages/setAvatar"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

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
