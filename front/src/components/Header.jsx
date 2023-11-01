import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { BiMenu } from "react-icons/bi"


const Header = ({login})=>{

    function buttomFilterMain() {
        const currentStyled = document.querySelector("#menu-filter").getAttribute("class", "collapse")
    
        if (currentStyled === "collapse") {
            document.querySelector("#menu-filter").setAttribute("class", "collapse.show")
        }else{
            document.querySelector("#menu-filter").setAttribute("class", "collapse")
        }
    }
    
    const Logeed = ()=>{
        return(
            <>
                <div className="btn-groups logeed">
                    <p><i className="bi bi-person-fill"></i> {login.name} </p>
                </div>
                <button className="navbar-toggler" type="button" onClick={ buttomFilterMain }>
                        <BiMenu/>
                </button>
            </>
        )
    }
    const LogeedOut = ()=>{
        return(
            <div className="btn-groups">
                <Link to="/login" className="btn btn-primary btn-sm"> <i className="bi bi-person-fill"></i> Sing in </Link>
                <Link to="/" className="btn btn-primary btn-sm"> Sing up </Link>


                <button className="navbar-toggler" type="button" onClick={ buttomFilterMain }>
                    <BiMenu/>
                </button>


            </div>
        )
    }
        
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"> <i className="bi bi-collection"></i> CATALOGO </a>
                    {
                        login.name ? <Logeed/> : <LogeedOut/>
                    }
                </div>
            </nav>

            <div className="container-xxl">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Header;