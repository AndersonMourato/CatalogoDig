const Product = ({img, cod, descricao, marca, preco, promo, prFinal, setList, list})=>{

    function checked(ev){
        const checked = ev.target.checked;
        const codItem = ev.target.name;
        let lista = list;
        
        if(checked == true){
            lista.push(codItem)
            setList(lista)
        }else{
            const newLista = list.filter((itens)=> itens != codItem)
            setList(newLista)
        }
    }

    return(
        <tr>
            <td className="col">
                <input onClick={checked} type="checkbox" name={ cod }/>
            </td>
            <td className="col">
                <img className="prod-icon" src={ img } /> 
            </td>
            <td className="col"> { cod } </td>
            <td className="col"> { descricao } </td>
            <td className="col"> { marca } </td>
            <td className="col"> { preco } </td>
            <td className="col"> { promo } </td>
            <td className="col"> { prFinal } </td>
        </tr>
    )
}

export default Product;