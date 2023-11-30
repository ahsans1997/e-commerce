import Product from "./products/Product";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Home;