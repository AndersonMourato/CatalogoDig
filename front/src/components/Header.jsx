import FormLogin from "./FormLogin";
const Header = ({stateUser, setStateUser})=>{

    return(
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#"> <i className="bi bi-collection"></i> CATALOGO </a>

                    <div className="btn-groups">
                        <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropSingIn"> <i class="bi bi-person-fill"></i> Sing in </button>
                        <button className="btn btn-primary btn-sm" href="#"> Sing up </button>
                    </div>
                </div>
            </nav>

            <FormLogin stateUser={stateUser} setStateUser={setStateUser} />
        </>
    );
}

export default Header;