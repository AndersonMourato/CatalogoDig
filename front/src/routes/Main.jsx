const Main = ()=>{
    return(
        <>
            <h1> Lista de Produtos </h1>
            <div className="main-container">

                <div className="main-content">

                    <div className="search-prod">
                        <div className="row">
                            <form method="get">
                                    <div class="input-group">
                                        <span class="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
                                        <input type="text" class="form-control" placeholder="buscar produto" />
                                    </div>
                            </form>
                        </div>
                    </div>

                                        
                    <div className="product-row">
                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className="col"> ADD </th>
                                        <th className="col"> IMAGEM </th>
                                        <th className="col"> CÓDIGO </th>
                                        <th className="col"> DESCRICÃO </th>
                                        <th className="col"> MARCA </th>
                                        <th className="col"> PREÇO R$ </th>
                                        <th className="col"> PROMOÇÃO </th>
                                        <th className="col"> PRE. FINAL R$ </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col">
                                            <input type="checkbox"/>
                                        </td>
                                        <td className="col">
                                            <img className="prod-icon" src="https://dmvfarma.vtexassets.com/arquivos/ids/224765/caixa-padrao-Sanofi.jpg?v=638227813638400000" /> 
                                        </td>
                                        <td className="col"> 1322 </td>
                                        <td className="col"> Azitromicina 500mg 3 </td>
                                        <td className="col"> Medlay </td>
                                        <td className="col"> 12,89 </td>
                                        <td className="col"> Acima de 4 </td>
                                        <td className="col"> 10,89 </td>
                                    </tr>

                                    <tr>
                                        <td className="col">
                                            <input type="checkbox"/>
                                        </td>
                                        <td className="col">
                                            <img className="prod-icon" src="https://dmvfarma.vtexassets.com/arquivos/ids/224765/caixa-padrao-Sanofi.jpg?v=638227813638400000" /> 
                                        </td>
                                        <td className="col"> 1322 </td>
                                        <td className="col"> Azitromicina 500mg 3 </td>
                                        <td className="col"> Medlay </td>
                                        <td className="col"> 12,89 </td>
                                        <td className="col"> Acima de 4 </td>
                                        <td className="col"> 10,89 </td>
                                    </tr>

                                    <tr>
                                        <td className="col">
                                            <input type="checkbox"/>
                                        </td>
                                        <td className="col">
                                            <img className="prod-icon" src="https://dmvfarma.vtexassets.com/arquivos/ids/224765/caixa-padrao-Sanofi.jpg?v=638227813638400000" /> 
                                        </td>
                                        <td className="col"> 1322 </td>
                                        <td className="col"> Azitromicina 500mg 3 </td>
                                        <td className="col"> Medlay </td>
                                        <td className="col"> 12,89 </td>
                                        <td className="col"> Acima de 4 </td>
                                        <td className="col"> 10,89 </td>
                                    </tr>

                                    <tr>
                                        <td className="col">
                                            <input type="checkbox"/>
                                        </td>
                                        <td className="col">
                                            <img className="prod-icon" src="https://dmvfarma.vtexassets.com/arquivos/ids/224765/caixa-padrao-Sanofi.jpg?v=638227813638400000" /> 
                                        </td>
                                        <td className="col"> 1322 </td>
                                        <td className="col"> Azitromicina 500mg 3 </td>
                                        <td className="col"> Medlay </td>
                                        <td className="col"> 12,89 </td>
                                        <td className="col"> Acima de 4 </td>
                                        <td className="col"> 10,89 </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                <div className="main-menu">
                    MENU LATERAL
                </div>

            </div>
        </>
    )
}
export default Main;