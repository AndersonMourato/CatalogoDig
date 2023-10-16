import { useEffect, useState } from "react";
import FormLogin from "./FormLogin";

const Header = ()=>{

    const user = {
        nome:"",
        password:"",
        access: false
    }

    const [stateUser, setStateUser] = useState(user);
    
    const Logeed = ()=>{
        return(
            <div className="btn-groups">
                <h5 className="userName"> <i className="bi bi-person-fill"></i> {stateUser.nome} </h5>
            </div>
        )   
    }
    const LogeedOut = ()=>{
        return(
            <div className="btn-groups">
                <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropSingIn"> <i className="bi bi-person-fill"></i> Sing in </button>
                <button className="btn btn-primary btn-sm" href="#"> Sing up </button>
            </div>
        )
    }


        
    return(
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#"> <i className="bi bi-collection"></i> CATALOGO </a>
                    {
                       stateUser.access === true ? <Logeed /> : <LogeedOut />                       
                    }
                </div>
            </nav>

            <FormLogin stateUser={stateUser} setStateUser={setStateUser} />

            <h5> <i className="bi bi-person-fill"></i> {stateUser.nome} </h5>

        </>
    )


}

export default Header;