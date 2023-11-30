import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import axiosClient from '../axiosClient';
import PreLoader from '../components/preloder/PreLoader';
import Header from './guest/Header';


const DefaultLayout = () => {

    const { token } = useAuth();

    // if(!token) {
    //     return <Navigate to="/login" />;
    // }


    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);



    if (token) {
        const payload = token.split('.')[1];
        const info = JSON.parse(atob(payload));

        

        useEffect(() => {
            setLoading(true);
            axiosClient.get(`/user/${info.sub}`)
                .then(data => {
                    
                    setUser(data.user);
                    setLoading(false);
                })
        }, [info.sub]);
    }



    return (
        <div>
            {loading && <PreLoader />}
            <Header user={user} />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;