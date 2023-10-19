import { useRef } from "react";
import { Form, redirect } from "react-router-dom";


export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    return redirect("/");
}


const Login = ({setLogin})=>{  
    
    const formRef = useRef();

    function submit(){
        const name = formRef.current.formUser.value;
        const password = formRef.current.formPass.value;

        setLogin({
            name: name,
            password: password
        })
    }
    
    return(
        <div className="container">
            <div className="content-login">

                
                    <div className="header">
                        <h2>  <i className="bi bi-person-fill"></i> Login </h2>
                        <p> Apenas usuários registrados ao ERP. </p>
                    </div>

                    <Form method="post" ref={formRef}>
                        <input type="text" name="formUser" className="form-control" placeholder="User" required/>
                        <input type="password" name="formPass" className="form-control" placeholder="Password" required/>
                        <div className="buttons">
                            <button type="submit" onClick={submit} className="btn btn-primary" > Sing in </button>
                            <button type="button" className="btn btn-primary"> Close </button>
                        </div>
                    </Form>


            </div>
        </div>
        
    )
}

export default Login;