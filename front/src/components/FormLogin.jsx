import { useRef } from "react";


const FormLogin = ({ stateUser, setStateUser })=>{

    const newUser = stateUser;
    const formRef = useRef();
    
    function submit(){
        let user = formRef.current.formUser.value;
        let passw = formRef.current.formPass.value;

        if(user !== "" && passw !== ""){

            newUser.access = true;
            newUser.nome = user;   
            newUser.password = passw;   
            
            setStateUser(newUser);

            formRef.current.formUser.value = "";
            formRef.current.formPass.value = "";
        }else{
            alert("Preencha todos os campos!")
        }

    }    
    

    return(
        <div className="modalLogin">

            <div className="modal fade" id="staticBackdropSingIn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        
                            <div className="modal-header">
                                <p> Apenas usuários registrados ao ERP. </p>
                                <h2>  <i class="bi bi-person-fill"></i> Login </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <form ref={formRef}>
                                <input type="text" name="formUser" className="form-control" placeholder="User" required/>
                                <input type="password" name="formPass" className="form-control" placeholder="Password" required/>
                                <div className="buttons">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={submit}> Sing in </button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"> Close </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default FormLogin;