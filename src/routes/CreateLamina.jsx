import { useLocation } from "react-router-dom";
import { action } from "./PaginateProducs";


function CreateLamina(){

    let { state } = useLocation();

    console.log(state)


    return(
        <h1> VAMOS LÁ... </h1>
    )
}

export default CreateLamina;
