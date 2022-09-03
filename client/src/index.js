import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./context/user/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback={""}>
            <Router>
                <UserContextProvider>
                    <ToastContainer position="bottom-right" autoClose={5000} draggable theme="dark" />
                    <App />
                </UserContextProvider>
            </Router>
        </Suspense>
    </React.StrictMode>
);
