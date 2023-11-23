import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminLayout = () => {

    const {token} = useAuth();

    if(!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            Admin
            <Outlet />
        </div>
    );
};

export default AdminLayout;