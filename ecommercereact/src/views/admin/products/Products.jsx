import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='row'>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 style={{ float: 'left' }}>Products</h3>
                        <Link style={{ float: 'right' }} className='btn btn-success' to='/admin/products/create'>Add Product</Link>
                    </div>
                    <div className="card-body">
                        {/* Your product list or other content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
