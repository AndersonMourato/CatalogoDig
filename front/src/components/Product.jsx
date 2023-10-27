import { TbSquareRoundedPlus, TbSquareRoundedPlusFilled  } from "react-icons/tb";

const Product = ({ id, img, cod, descricao, marca, preco, promo, prFinal, listItens, setList})=>{

    let check = false
    const butt = [<TbSquareRoundedPlus/>, <TbSquareRoundedPlusFilled/>]


    listItens.map((item, k) => {
        if(item.cod == cod && item.id == id){
            check = true;
        }
    })

    const Button = ()=>{
        return(
           check == true ? butt[1] : butt[0]
        )
    }

    function submitChecked(cod, id){
        if(listItens.length > 0){
            listItens.map((item)=>{
                if(item.cod == cod && item.id == id){
                    const newLista = listItens.filter((itens)=> {
                        return itens.cod != cod && itens.id != id                    
                    })            
                    setList(newLista)
                    check = false
                }else{
                    const array = [...listItens, {cod:cod, id:id}]
                    setList([...new Set(array)])
                    check = true
                }
            })
        }else{
            const array = [...listItens, {cod:cod, id:id}]
            setList([...new Set(array)])
            check = true
        }       
    }
   
    return(
        <tr>
            <td className="col">
                <span onClick={ ()=>submitChecked(cod, id) } className="btnAction"> <Button /> </span>  
            </td>
            <td className="col">
                <img onClick={ ()=>submitChecked(cod, id) } className="prod-icon" src={ img } /> 
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