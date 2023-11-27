import { useRef, useState } from 'react';
import axiosClient from '../../../axiosClient';
import PreLoader from '../../../components/preloder/PreLoader';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
    const name = useRef();
    const price = useRef();
    const quantity = useRef();
    const category = useRef();
    const image = useRef();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            name: name.current.value,
            price: price.current.value,
            quantity: quantity.current.value,
            category: category.current.value,
            image: image.current.files[0]
        }
        axiosClient.post('/admin/products', payload)
            .then(res => {
                console.log(res);
                setLoading(false);
                navigate('/admin/products');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }
    return (
        <div className=''>
            {loading && <PreLoader />}
            <div className="card">
                <div className="card-header">
                    <h3 style={{ float: 'left' }}>Add Product</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input ref={name} type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="">Price</label>
                                    <input ref={price} type="number" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="">Quantity</label>
                                    <input ref={quantity} type="number" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="">Category</label>
                                    <select ref={category} className='form-control'>
                                        <option value="">Select Category</option>
                                        <option value="1">Category 1</option>
                                        <option value="2">Category 2</option>
                                        <option value="3">Category 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="form-group">
                                    <label htmlFor="">Image</label>
                                    <input ref={image} type="file" className='form-control' />
                                </div>
                            </div>
                        </div>
                            <button type='submit' className='btn btn-success mt-3' style={{ float: 'right', }}>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;