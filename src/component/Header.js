import { NavLink } from "react-router-dom";

function Header (){
    return<>
     <header className=" position-sticky top-0 bg-white col-12 d-flex justify-content-between p-3 border-bottom border-2">
            <p className="h4 text-primary m-0">User Management App</p>
            <ul className="list-unstyled d-flex gap-3 m-0 text-decoration-none">
                <li>
                    <NavLink to="/new-user" className="text-text-decoration-none text-secondary">Add New User</NavLink>
                </li>
                <li>
                    <NavLink to="/user-list" className="text-text-decoration-none text-secondary">User List</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="text-text-decoration-none text-secondary"> <i className="fa fa-power-off me-2"></i>Log Out</NavLink>
                </li>
            </ul>
        </header>
    </>
}


export default Header;