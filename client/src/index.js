import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback={""}>
            <Router>
                <ToastContainer position="bottom-right" autoClose={5000} pauseOnFocusLoss pauseOnHover draggable theme="dark" />
                <App />
            </Router>
        </Suspense>
    </React.StrictMode>
);
