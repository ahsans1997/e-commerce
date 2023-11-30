import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../axiosClient';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axiosClient.get(`/products/${id}`)
            .then(data => setProduct(data.product))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-4">
                    <img className='img-fluid' src={product.image} alt="" />
                </div>
                <div className="col-md-8"></div>
            </div>
            
        </div>
    );
};

export default ProductDetails;