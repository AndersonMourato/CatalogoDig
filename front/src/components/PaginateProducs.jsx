import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Product from "../components/Product";


function PaginateProducs({ productsAll, itemsShow, listItens }){

    const items = productsAll;
  
    function Items({ currentItems }) {
      return (
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
                                                listItens={ listItens }
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
                    //forcePage={ forcePage }
                    //initialPage={2}
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
        <PaginatedItems itemsPerPage={ itemsShow }/>
    )
}
export default PaginateProducs;