import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import axiosClient from '../axiosClient';
import PreLoader from '../components/preloder/PreLoader';

const DefaultLayout = () => {

    const {token} = useAuth();

    if(!token) {
        return <Navigate to="/login" />;
    }

    const payload = token.split('.')[1];
    const info = JSON.parse(atob(payload));
    // console.log(info);
  
    // const {sub} = DecodeToken();

    const [user, setUser] = useState('');

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/user/${info.sub}`)
        .then(data => {
            console.log(data.user);
            setUser(data.user);
            setLoading(false);
        })
    }, []);

    if(user.role === 1) {
        return <Navigate to="/admin" />;
    }

    return (
        <div>
            {loading && <PreLoader />}
            {user.name}
            <Outlet />
        </div>
    );
};

export default DefaultLayout;