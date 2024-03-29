import { CDBNavbar } from "cdbreact";

const Navbar = (props) => {
    const {name} = props.user;
    return (
        <div>
            <div style={{ background: "#333", color: "#fff", height: '75px' }}>
                <CDBNavbar dark expand="md" scrolling className="justify-content-end">
                    
                    <div className="ml-auto">
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-comment-alt mx-4"></i>
                        <span>{name}</span>
                    </div>
                </CDBNavbar>
            </div>
        </div>
    );
};

export default Navbar;