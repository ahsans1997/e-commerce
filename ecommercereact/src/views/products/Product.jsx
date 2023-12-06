import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { set } from 'date-fns';
import Cookies from 'js-cookie';

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosClient.get('/products')
            .then(data => setProducts(data.products))
            .catch(err => console.log(err))
    }, [])

    const { token } = useAuth();

    const [showModal, setShowModal] = useState(false);

    const addToCert = (id) => {
        if (!token) {
            setShowModal(true);
        }
        else {
            const payload = {
                user_id: Cookies.get('USER_ID'),
                product_id: id
            }
            axiosClient.post('/certs', payload)
                .then(data => {
                    console.log(data);
                    // navigate('/cert');
                })
                .catch(err => console.log(err))
        }
        
    }
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
                                <button className='btn btn-success' onClick={() => addToCert(product.id)}>Add to Cert</button>
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                showModal && (
                    <div className="modal fade show" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Please login to continue
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Product;