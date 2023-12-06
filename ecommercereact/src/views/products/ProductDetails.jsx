import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import PreLoader from '../../components/preloder/PreLoader';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/products/${id}`)
            .then(data =>
                setProduct(data.product),
                setLoading(false)
            )
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {loading && <PreLoader />}
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={product.image} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <label>Name : {product.product?.name}</label>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default ProductDetails;