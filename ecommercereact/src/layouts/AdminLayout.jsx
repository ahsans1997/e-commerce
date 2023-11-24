import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axiosClient from '../axiosClient';
import { useEffect, useState } from 'react';
import PreLoader from '../components/preloder/PreLoader';
import Sidebar from './admin/Sidebar';
import Navbar from './admin/Navbar';

const AdminLayout = () => {

    const {token} = useAuth();

    if(!token) {
        return <Navigate to="/login" />;
    }

    const payload = token.split('.')[1];
    const info = JSON.parse(atob(payload));

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/user/${info.sub}`)
        .then(data => {
            // console.log(data.user);
            setUser(data.user);
            setLoading(false);
        })
    }, [info.sub]);
    
    if(user.role === 2) {
        return <Navigate to="/" />;
    }

    return (
        <div className='d-flex'>
            {loading && <PreLoader />}
            <Sidebar />
            <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
                <Navbar user={user} />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;