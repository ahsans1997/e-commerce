import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const GuestLayout = () => {

    const {token} = useAuth();
    if(token) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;