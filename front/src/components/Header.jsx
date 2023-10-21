import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Header = ({login})=>{

    const Logeed = ()=>{
        return(
            <div className="btn-groups logeed">
                <p><i className="bi bi-person-fill"></i> {login.name} </p>
            </div>
        )
    }
    const LogeedOut = ()=>{
        return(
            <div className="btn-groups">
                <Link to="/login" className="btn btn-primary btn-sm"> <i className="bi bi-person-fill"></i> Sing in </Link>
                <Link to="/" className="btn btn-primary btn-sm"> Sing up </Link>
            </div>
        )
    }
        
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"> <i className="bi bi-collection"></i> CATALOGO </a>
                    {
                        login.name ? <Logeed/> : <LogeedOut/>
                    }
                </div>
            </nav>

            <div className="container text-center">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Header;