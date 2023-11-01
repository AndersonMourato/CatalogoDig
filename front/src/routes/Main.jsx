import { useState } from "react";
import { BiAbacus, BiCategoryAlt, BiLayout } from "react-icons/bi"
import { getProducts, getMarcas, getDepartamentos, getCategorias } from "../components/Products";
import PaginateProducs from "../components/PaginateProducs";
import { Link } from "react-router-dom";

const Main = ()=>{
    const products = getProducts();
    const marcas = getMarcas();
    const departamentos = getDepartamentos();
    const categorias = getCategorias();
    
    const [list, setList] = useState([])
    const [productsAll, setProductsAll] = useState(products);
    const [getFiltros, setFiltros] = useState({
        marca: "",
        departamento: "",
        categoria: ""
    });

    function filter(ev){
        const id = ev.target.id;
        const value = ev.target.value;

        if(id === "marca"){
            setFiltros({
                marca: value,
                departamento: getFiltros.departamento,
                categoria: getFiltros.categoria
            })
        }else if(id === "departamento"){
            setFiltros({
                marca: getFiltros.marca,
                departamento: value,
                categoria: getFiltros.categoria
            })
        }else if(id === "categoria"){
            setFiltros({
                marca: getFiltros.marca,
                departamento: getFiltros.departamento,
                categoria: value
            })
        }

    }

    function aplicFilter(){
        const marca = (item)=>{
            if(getFiltros.marca != ""){
                return item.marca === getFiltros.marca
            }else{
                return true
            }   
        }
        const categoria = (item)=>{
            if(getFiltros.categoria != ""){
                return item.categoria === getFiltros.categoria
            }else{
                return true
            }   
        }
        const departamento = (item)=>{
            if(getFiltros.departamento != ""){
                return item.departamento === getFiltros.departamento
            }else{
                return true
            }   
        }
        
        if(getFiltros.marca != "" || getFiltros.categoria != "" || getFiltros.departamento != ""){
            const newArray = products.filter((item)=> marca(item)).filter((item)=> departamento(item)).filter((item)=> categoria(item))
            setProductsAll(newArray)
        }
    }
        /*
            
            
        
        */
    return(
        <>

            <div className="body-content">

                <div className="content">
                    <h1> Lista de Produtos </h1>
                    <PaginateProducs productsAll={ productsAll } list={ list } setList={ setList } itemsShow={ 5 } />
                </div>

                <div id="menu-filter" className="collapse">

                    <div className="box-menu">
                        <h6> <BiAbacus /> Filtrar por </h6>

                        <select id="marca" onChange={ filter }>
                            <option value=""> Marca.. </option>
                            {
                                marcas.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <select id="departamento" onChange={ filter }>
                            <option value=""> Departamento.. </option>
                            {
                                departamentos.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <select id="categoria" onChange={ filter }>
                            <option value=""> Categoria.. </option>
                            {
                                categorias.map((item,k)=>{
                                    return <option key={k} value={ item }> { item } </option>
                                })
                            }
                        </select>

                        <div className="btn-filter">
                            <button onClick={aplicFilter} type="button" className="btn btn-primary btn-sm"> Aplicar </button>
                            <button onClick={()=> setProductsAll(products)} type="button" className="btn btn-primary btn-sm"> Limpar </button>
                        </div>
                    </div>

                    <div className="box-menu">
                        <h6> <BiCategoryAlt/> Total de itens </h6>
                        <span> { list.length } </span>
                    </div>

                    <div className="box-menu">
                        <h6> <BiLayout/> Ir para layout </h6>
                        {
                            list.length > 0 ?
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