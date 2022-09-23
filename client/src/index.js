import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "@Context/user/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback={""}>
            <Router basename="/">
                <UserContextProvider>
                    <ToastContainer position="bottom-right" autoClose={3500} pauseOnHover={false} pauseOnFocusLoss={false} draggable theme="dark" />
                    <App />
                </UserContextProvider>
            </Router>
        </Suspense>
    </React.StrictMode>
);
