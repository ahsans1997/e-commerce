import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const DefaultLayout = () => {

    const {token} = useAuth();
    
    if(!token) {
        return <Navigate to="/login" />;
    }
    


    return (
        <div>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;