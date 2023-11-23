import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Certs from "./views/Certs";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Error from "./views/errors/404";
import AdminLayout from "./layouts/AdminLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cert',
                element: <Certs />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin/cert',
                element: <Certs />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <Error />,
    }
]);

export default Router;