// eslint-disable-next-line no-unused-vars
import React from "react";
import Headers from "../UI/Headers.jsx";
import Footers from "../UI/Footers.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="app-layout">
            <Headers />
            <main>
                <Outlet /> {/* This renders the active route */}
            </main>
            <Footers />
        </div>
    );
}
