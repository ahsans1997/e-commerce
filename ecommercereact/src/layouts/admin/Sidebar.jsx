import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader } from 'cdbreact';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <nav>
                        <ul>
                            <li><NavLink to='/admin/dashboard'><i className="fa-solid fa-gauge"></i><span className='menu-name'>Dashboard</span></NavLink></li>
                            <li><NavLink to='/admin/cert'><i className="fa-solid fa-cart-shopping"></i><span className='menu-name'>Certs</span></NavLink></li>
                        </ul>
                    </nav>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;