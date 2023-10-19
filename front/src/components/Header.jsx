import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Header = ({login})=>{
        
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"> <i className="bi bi-collection"></i> CATALOGO </a>
                    <div className="btn-groups">
                        <Link to="/login" className="btn btn-primary btn-sm"> <i className="bi bi-person-fill"></i> Sing in </Link>
                        <Link to="/" className="btn btn-primary btn-sm"> Sing up </Link>
                    </div>
                </div>
            </nav>

            <div className="container">
                {login.name && <h1>{login.name}</h1>}
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Header;