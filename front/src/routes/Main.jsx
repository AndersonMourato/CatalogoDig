import { useState } from "react";
import { BiAbacus, BiCategoryAlt } from "react-icons/bi"
import Product from "../components/Product";
import { getProducts, getMarcas, getDepartamentos, getCategorias } from "../components/Products";

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



    return(
        <>
            <h1> Lista de Produtos </h1>
            <div className="main-container">

                <div className="main-content">

                    <div className="search-prod">
                        <div className="row">
                            <form method="get">
                                    <div className="input-group">
                                        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                        <input type="text" className="form-control" placeholder="buscar produto" />
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
                                        {
                                            productsAll.map((itens, key)=>{
                                                return(
                                                    <Product 
                                                        key={ key }
                                                        id={ itens.id }
                                                        img={ itens.img }
                                                        cod={ itens.cod}
                                                        descricao={ itens.descricao }
                                                        marca={ itens.marca }
                                                        preco={ itens.preco }
                                                        promo={ itens.promo }
                                                        prFinal={ itens.prFinal }
                                                        listItens={ list }
                                                        setList={ setList }
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

                <div className="main-menu">

                    <div className="box-menu">
                        <h6> <BiAbacus /> Filtros </h6>

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
                        <h6> <BiCategoryAlt/> Itens </h6>
                        <span> { list.length } </span>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Main;