import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosClient.get('/products')
            .then(data => setProducts(data.products))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='row'>

            {
                products.map(product => (
                    <div key={product.id} className='col-md-4'>
                        <div className="card">
                            <img src={'http://127.0.0.1:8000/storage/' + product.image} className="card-img-top" alt="Product Image" style={{ height: '370px', }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: {product.price}</p>
                                    <Link to={`/product-details/${product.id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;