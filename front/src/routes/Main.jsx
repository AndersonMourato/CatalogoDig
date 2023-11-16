import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiAbacus, BiCategoryAlt, BiLayout } from "react-icons/bi"

import { getMarcas, getDepartamentos, getCategorias } from "../components/Products";
import PaginateProducs from "../components/PaginateProducs";






export default function Main(){
    
    return(
        <>
            <div className="body-content">
                
                <PaginateProducs qtdItemsShow={ 5 } />
                <MenuContent />
                

            </div>
        </>
    )
}

function MenuContent(){

    const marcas = getMarcas();
    const departamentos = getDepartamentos();
    const categorias = getCategorias();

    function updateFilter(ev){
        const id = ev.target.id;
        const value = ev.target.value;
    }

    function submitFilter(){ 

    }


    return(
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
                    <button type="button" onClick={submitFilter} className="btn btn-primary btn-sm"> Aplicar </button>
                    <button type="button" className="btn btn-primary btn-sm"> Limpar </button>
                </div>
            </div>

            <div className="box-menu">
                <h6> <BiCategoryAlt/> Total de itens </h6>
                <span> { 0 } </span>
            </div>

            <div className="box-menu">
                <h6> <BiLayout/> Ir para layout </h6>
                
                <Link to="/" className="btn btn-primary btn-sm"> Avançar </Link> :
                <p style={{fontSize:"0.7rem"}}>adicione ao menos um produto para proseguir com o layout.</p>
            
            </div>
        </div>
    )
}