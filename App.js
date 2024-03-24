import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/Error";
import Form from "./src/Form";
import BodyComp from "./src/BodyComp";
import Header from "./src/Header";
import Footer from "./src/Footer.js";

const AppComp = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComp />,
        children: [
            {
                path: "/",
                element: <BodyComp />,
            },
            {
                path: "/form",
                element: <Form />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
