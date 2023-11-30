import { Link } from 'react-router-dom';
import ProductTable from '../../../components/products/ProductTable';
import { useEffect, useState } from 'react';
import axioxClient from '../../../axiosClient';
import PreLoader from '../../../components/preloder/PreLoader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axioxClient.get('/admin/products')
            .then(res => {
                setProducts(res.products);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, []);
    return (
        <div className='row'>
            {loading && <PreLoader />}
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 style={{ float: 'left' }}>Products</h3>
                        <Link style={{ float: 'right' }} className='btn btn-success' to='/admin/products/create'>Add Product</Link>
                    </div>
                    <div className="card-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Create Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product) => <ProductTable key={product.id} product={product} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
