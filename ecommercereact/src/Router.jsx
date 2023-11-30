import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Certs from "./views/Certs";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Error from "./views/errors/404";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./views/admin/dashboard/Dashboard";
import AdminCerts from "./views/admin/certs/Certs";
import Products from "./views/admin/products/Products";
import ProductCreate from "./views/admin/products/ProductCreate";
import ProductDetails from "./views/products/ProductDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {path: '/', element: <Home />},
            {path: 'product-details/:id', element: <ProductDetails />},
            {path: '/cert', element: <Certs />}
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {path: '/admin', element: <Navigate to="/admin/dashboard" />},
            {path: '/admin/dashboard', element: <Dashboard />},
            //Products
            {path: '/admin/products', element: <Products />,},
            {path: '/admin/products/create', element: <ProductCreate />},
            //Certs
            {path: '/admin/cert', element: <AdminCerts />}
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {path: '/login', element: <Login />},
            {path: '/register', element: <Register />}
        ]
    },
    {
        path: '*',
        element: <Error />,
    }
]);

export default Router;