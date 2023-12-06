import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import Cookies from "js-cookie";
import PreLoader from "../components/preloder/PreLoader";
import { Navigate, useNavigate } from "react-router-dom";

const Certs = () => {
    const navigate = useNavigate();
    if(!Cookies.get('USER_ID')){
        return <Navigate to='/login' />
    }
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoding] = useState(false);
    useEffect(() => {
        setLoding(true);
        const user_id = Cookies.get('USER_ID');
        axiosClient.get(`/certProducts/${user_id}`)
            .then(data => {
                console.log(data.certProducts);
                setCartProducts(data.certProducts);
                setLoding(false);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            {loading && <PreLoader />}
        </div>
    );
};

export default Certs;