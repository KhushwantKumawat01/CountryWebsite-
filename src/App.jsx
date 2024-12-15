import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Country from "./Pages/Country.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import {CountryDetails} from "./Component/Layout/CountryDetails.jsx";
import AppLayout from "./Component/Layout/AppLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />, // Default page will show Home initially
            },
            {
                path: "/about",
                element: <About />, // About page will render on navigation
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/country",
                element: <Country />,
            },
            {
                path: "country/:id",
                element: <CountryDetails />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
