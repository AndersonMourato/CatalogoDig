import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { TbSquareRoundedPlus, TbSquareRoundedPlusFilled  } from "react-icons/tb";
import { Link, redirect, useSubmit } from "react-router-dom";
import { BiAbacus, BiCategoryAlt, BiLayout } from "react-icons/bi"
import { getProducts, getMarcas, getDepartamentos, getCategorias, getFilial } from "../components/Products";


function MenuContent({ listItens, setItems, items, sttFl, setSttFl, filterFilial}){
    const marcas = getMarcas();
    const departamentos = getDepartamentos();
    const categorias = getCategorias();
    const filiais = getFilial();
    let actionSubimit = useSubmit();

    function filterMarca(ev){
        const id = ev.target.id;
        const value = ev.target.value;
        let newArray = []

        if(id && value){
            if(id === "marca"){
                items.forEach((row)=>{
                    if( value === row.marca ){
                        newArray.push(row)
                    }
                })
            }
        }
        (newArray !== "") && setItems(newArray)

    }

    function filterDepartamento(ev){
        const id = ev.target.id;
        const value = ev.target.value;
        let newArray = []

        if(id && value){
            if(id === "departamento"){
                items.forEach((row)=>{
                    if( value === row.departamento ){
                        newArray.push(row)
                    }
                })
            }
        }
        (newArray !== "") && setItems(newArray)
    }

    function filterCategoria(ev){
        const id = ev.target.id;
        const value = ev.target.value;
        let newArray = []

        if(id && value){
            if(id === "categoria"){
                items.forEach((row)=>{
                    if( value === row.categoria ){
                        newArray.push(row)
                    }
                })
            }
        }
        (newArray !== "") && setItems(newArray)
    }

    function clearFilter(){
        document.querySelector("#marca").selectedIndex = 0
        document.querySelector("#departamento").selectedIndex = 0
        document.querySelector("#categoria").selectedIndex = 0
        setItems( filterFilial(getProducts(), sttFl) )
    }

    function getFilialInput(ev){
        let fl = parseInt(ev.target.value)
        if(fl){
            setSttFl(fl)
        }
    }

    return(
        <div id="menu-filter" className="collapse">
            <div className="box-menu">
                <h6> <BiAbacus /> Filtrar por </h6>
                
                {
                    filiais.map((item,k)=>{
                        if(item === sttFl){
                            return (
                                <div id="filiais" key={k} onChange={(ev)=> getFilialInput(ev)}>
                                    <input type="radio" id={ 10 + k} name="filial" value={ item } defaultChecked/>
                                    <label htmlFor={ 10 + k }> { "Filial "+ item } </label>
                                </div>
                            )
                        }else{
                            return (
                                <div id="filiais" key={k} onChange={(ev)=> getFilialInput(ev)}>
                                    <input type="radio" id={ 10 + k} name="filial" value={ item }/>
                                    <label htmlFor={ 10 + k }> { "Filial "+ item } </label>
                                </div>
                            ) 
                        }
                    })
                }
              
            </div>
            <div className="box-menu">
                <select id="marca" onChange={ filterMarca }>
                    <option value=""> Marca.. </option>
                    {
                        marcas.map((item,k)=>{
                            return <option key={k} value={ item }> { item } </option>
                        })
                    }
                </select>

                <select id="departamento" onChange={ filterDepartamento }>
                    <option value=""> Departamento.. </option>
                    {
                        departamentos.map((item,k)=>{
                            return <option key={k} value={ item }> { item } </option>
                        })
                    }
                </select>

                <select id="categoria" onChange={ filterCategoria }>
                    <option value=""> Categoria.. </option>
                    {
                        categorias.map((item,k)=>{
                            return <option key={k} value={ item }> { item } </option>
                        })
                    }
                </select>

                <div className="btn-filter">
                    <button type="button" onClick={ clearFilter } className="btn btn-primary btn-sm"> Limpar Filtros </button>
                </div>
            </div>

            <div className="box-menu">
                <h6> <BiCategoryAlt/> Total de itens </h6>
                <span> { listItens.length } </span>
            </div>

            <div className="box-menu">
                <h6> <BiLayout/> Ir para layout </h6>
                {
                    listItens.length > 0 ? 
                    <Link to={{ 
                        pathname: '/criacao', 
                        state: listItens,  
                    }}
                        className="btn btn-primary btn-sm"> Avançar 
                    </Link> :
                    <p style={{fontSize:"0.7rem"}}>adicione ao menos um produto para proseguir com o layout.</p>
                }
            
            </div>
        </div>
    )
}

function Product({ idKey, img, cod, descricao, marca, preco, promo, prFinal, listItens, setListItens }){
    const [checkeed, setCheckeed] = useState(false) 
    
    function currentList(id){
        // VERIFICA SE O ID JA ESTA NA LISTA E RETORNA TRUE
        let result = false
        listItens.forEach(element => {
            if(element === id){
                result = true
            }
        });
        return result;
    }
    
    const Button = ()=>{     
        return(
            currentList(idKey) ? <TbSquareRoundedPlusFilled/> : <TbSquareRoundedPlus/> 
        )
    }

    function submitClick( idKey ){     
        if(checkeed){
            if(currentList(idKey)){
                setCheckeed(false)
                setListItens(
                    listItens.filter((item)=>{
                        return item !== idKey
                    })
                )
            }else{
                setCheckeed(false)
            }

        }else{
            if(currentList(idKey)){
                setCheckeed(true)
            }else{
                setCheckeed(true)
                setListItens((prevState) => { return [...prevState, idKey] })
            }
        }
    }
   
    return(
        <tr>
            <td className="col" id={idKey}>
                <span onClick={ ()=> submitClick(idKey) } className="btnAction" > <Button /> </span>  
            </td>
            <td className="col">
                <img onClick={ ()=> submitClick(idKey) } className="prod-icon" src={ img } alt='Foto'/> 
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

function PaginateProducs(){
    const [sttFl, setSttFl] = useState(1)
  
    function Items({ currentItems, listItens, setListItens, search }) {

      return (
        <div className="content">
            <h1> Lista de Produtos </h1>
            <div className="main-content">
    
                <div className="search-prod">
                    <div className="row">
                        <form method="get" onSubmit={ (ev)=> ev.preventDefault() }>
                                <div className="input-group">
                                    <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                    <input onChange={ (ev)=> search(ev) } type="text" className="form-control" placeholder="buscar produto" />
                                </div>
                        </form>
                    </div>
                </div>
                      
                <div className="product-row">
                    <div className="row">
                        <div className="table-responsive-sm">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="col"> ADD </th>
                                        <th className="col"> IMAGEM </th>
                                        <th className="col"> CÓDIGO </th>
                                        <th className="col"> DESCRICÃO </th>
                                        <th className="col"> MARCA </th>
                                        <th className="col"> PREÇO </th>
                                        <th className="col"> PROMOÇÃO </th>
                                        <th className="col"> PRE. FINAL </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems &&
                                        currentItems.map((itens, key)=>{
                                            return(
                                                <Product 
                                                    key={ key }
                                                    idKey={ itens.idKey }
                                                    img={ itens.img }
                                                    cod={ itens.cod}
                                                    descricao={ itens.descricao }
                                                    marca={ itens.marca }
                                                    preco={ itens.preco }
                                                    promo={ itens.promo }
                                                    prFinal={ itens.prFinal }
                                                    listItens={ listItens } 
                                                    setListItens={ setListItens }
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    
            </div> 
        </div>
      );
    }
    
    function PaginatedItems({ itemsPerPage }) {
        const [listItens, setListItens] = useState([]);
        const [items, setItems] = useState( filterFilial(getProducts(), sttFl) )
        
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
        
        function handlePageClick(event){
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        }
        function search(ev){
            const filterText = ev.target.value
            const itensFilter = [];
           
            getProducts().forEach((product) => {
                if (
                    product.descricao.toLowerCase().indexOf(
                    filterText.toLowerCase()
                  ) === -1 || sttFl !== product.filial
                ) {
                  return;
                }
                itensFilter.push(product)
            })

            itensFilter && (setItems(itensFilter))
        }
        function filterFilial(array, filial){
            const newArray = []
            array.forEach((product)=>{
                if( product.filial === filial ){
                    newArray.push(product)
                }
            })
            if(newArray){
                return newArray
            }else{
                return array
            }
        }

        return (
            <>
                <Items currentItems={ currentItems } listItens={ listItens } setListItens={ setListItens } search={ search } />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    marginPagesDisplayed={2}
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
                <MenuContent listItens={ listItens } items={ items } setItems={ setItems } sttFl={ sttFl } setSttFl={ setSttFl } filterFilial={ filterFilial } />
            </>
        );
    }

    return(
        <div className="body-content">
            <PaginatedItems itemsPerPage={ 5 }/> 
        </div>
    )
}
export default PaginateProducs;