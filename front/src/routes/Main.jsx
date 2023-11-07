import { useState } from "react";
import { BiAbacus, BiCategoryAlt, BiLayout } from "react-icons/bi"
import { getProducts, getMarcas, getDepartamentos, getCategorias } from "../components/Products";
import PaginateProducs from "../components/PaginateProducs";
import { Link } from "react-router-dom";


const Main = ()=>{                                  console.log("BRANCH TESTE")
    const products = getProducts();
    const marcas = getMarcas();
    const departamentos = getDepartamentos();
    const categorias = getCategorias();
    const [productsAll, setProductsAll] = useState(products);
    const [getListItens, setListItens] = useState(0);
    
    let listItens = []
    let filters = {
        marca: "",
        departamento:"",
        categoria: ""
    }

   /* if(getListItens != "" && listItens == ""){
        listItens = getListItens 
     }
*/

    function updateFilter(ev){
        const id = ev.target.id;
        const value = ev.target.value;

        if(id === "marca"){
            filters.marca = value
        }else if(id === "departamento"){
            filters.departamento = value
        }else if(id === "categoria"){
            filters.categoria = value
        }
    }

    function submitFilter(){
        const marca = (item)=>{ 
            if(filters.marca != ""){
                return item.marca === filters.marca
            }else{
                return true
            }   
        }
        const categoria = (item)=>{
            if(filters.categoria != ""){
                return item.categoria === filters.categoria
            }else{
                return true
            }   
        }
        const departamento = (item)=>{
            if(filters.departamento != ""){
                return item.departamento === filters.departamento
            }else{
                return true
            }   
        }
        
        if(filters.marca != "" || filters.categoria != "" || filters.departamento != ""){ 
            const newArray = products.filter((item)=> marca(item)).filter((item)=> departamento(item)).filter((item)=> categoria(item))
            setProductsAll(newArray)
            setListItens(listItens)
        }
    }

    return(
        <>

            <div className="body-content">

                <div className="content">
                    <h1> Lista de Produtos </h1>
                    <PaginateProducs productsAll={ productsAll } listItens={ listItens } itemsShow={ 5 } />
                </div>

                <div id="menu-filter" className="collapse">

                    <div className="box-menu">
                        <h6> <BiAbacus /> Filtrar por </h6>

                        <select id="marca" onChange={ updateFilter }>
                            <option value=""> Marca.. </option>
                            {
                                marcas.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <select id="departamento" onChange={ updateFilter }>
                            <option value=""> Departamento.. </option>
                            {
                                departamentos.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <select id="categoria" onChange={ updateFilter }>
                            <option value=""> Categoria.. </option>
                            {
                                categorias.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <div className="btn-filter">
                            <button onClick={submitFilter} type="button" className="btn btn-primary btn-sm"> Aplicar </button>
                            <button onClick={()=> setProductsAll(products)} type="button" className="btn btn-primary btn-sm"> Limpar </button>
                        </div>
                    </div>

                    <div className="box-menu">
                        <h6> <BiCategoryAlt/> Total de itens </h6>
                        <span> 0 </span>
                    </div>

                    <div className="box-menu">
                        <h6> <BiLayout/> Ir para layout </h6>
                        {
                            listItens.length > 0 ?
                            <Link to="/" className="btn btn-primary btn-sm"> Avançar </Link> :
                            <p style={{fontSize:"0.7rem"}}>adicione ao menos um produto para proseguir com o layout.</p>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
export default Main;