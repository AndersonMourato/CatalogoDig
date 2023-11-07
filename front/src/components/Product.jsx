import { TbSquareRoundedPlus, TbSquareRoundedPlusFilled  } from "react-icons/tb";

const Product = ({ idKey, img, cod, descricao, marca, preco, promo, prFinal, listItens})=>{

    let check = false
    const butt = [<TbSquareRoundedPlus/>, <TbSquareRoundedPlusFilled/>]

    listItens.map((item, k) => {
        if(item.idKey == idKey){
            check = true;
        }
    })

    const Button = ()=>{
        return(
           check == true ? butt[1] : butt[0]
        )
    }

    function submitChecked(idKey){
        
        const svgCheck = '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.54 20.996c-.176 .004 -.356 .004 -.54 .004c-7.2 0 -9 -1.8 -9 -9s1.8 -9 9 -9s9 1.8 9 9c0 .185 -.001 .366 -.004 .544"></path><path d="M16 19h6"></path><path d="M19 16v6"></path>'
        const svgCheckeed = '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" fill="currentColor" stroke-width="0"></path>'
        let currentIcon = document.getElementById(idKey).querySelector(".btnAction > svg");
               
        if(idKey){
            if(currentIcon.innerHTML === svgCheck){
                currentIcon.innerHTML = svgCheckeed
                listItens.push({idKey})
            }else{
                currentIcon.innerHTML = svgCheck
                listItens = listItens.filter((item)=> {
                    return item.idKey != idKey
                })
            } 
            
        }
    }
   
    return(
        <tr>
            <td className="col" id={idKey}>
                <span className="btnAction" onClick={ ()=>submitChecked(idKey) }> <Button /> </span>  
            </td>
            <td className="col">
                <img className="prod-icon" onClick={ ()=>submitChecked(idKey) } src={ img } /> 
            </td>
            <td className="col"> { cod } </td>
            <td className="col" style={{textAlign:"left"}}> { descricao } </td>
            <td className="col"> { marca } </td>
            <td className="col"> { preco } </td>
            <td className="col"> { promo } </td>
            <td className="col"> { prFinal } </td>
        </tr>
    )
}

export default Product;