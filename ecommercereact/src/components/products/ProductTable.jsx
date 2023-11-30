import { format } from 'date-fns';

const ProductTable = (props) => {
    const { id, name, price, quantity, category_id, image, created_at } = props.product;
    const createDate = format(new Date(created_at), 'dd/MM/yyyy');
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{category_id}</td>
            <td><img src={'http://127.0.0.1:8000/storage/' + image} alt="" style={{ width: '100px', }} /></td>
            <td>{createDate}</td>
            <td>
                <button className='btn btn-sm btn-primary'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductTable;