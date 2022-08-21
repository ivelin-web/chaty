import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load pages
const Chat = lazy(() => import("./pages/chat/Chat"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
