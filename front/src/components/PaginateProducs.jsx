import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { TbSquareRoundedPlus, TbSquareRoundedPlusFilled  } from "react-icons/tb";

import { getProducts, getMarcas, getDepartamentos, getCategorias } from "../components/Products";


function Product({ idKey, img, cod, descricao, marca, preco, promo, prFinal}){
    const [checkeed, setCheckeed] = useState(false)
    const butt = [<TbSquareRoundedPlus/>, <TbSquareRoundedPlusFilled/>]

    const Button = ()=>{
        return(
            checkeed == idKey ? butt[1] : butt[0]
        )
    }
   
    return(
        <tr>
            <td className="col" id={idKey}>
                <span className="btnAction" > <Button /> </span>  
            </td>
            <td className="col">
                <img className="prod-icon" src={ img } /> 
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


function PaginateProducs({ qtdItemsShow }){

    const items = getProducts();
  
    function Items({ currentItems }) {
      return (
        <div className="content">
            <h1> Lista de Produtos </h1>
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
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
        
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={ currentItems } />
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
            </>
        );
    }

    return(
        <PaginatedItems itemsPerPage={ qtdItemsShow }/>
    )
}
export default PaginateProducs;