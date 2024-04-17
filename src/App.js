import './App.css';
import { createBrowserRouter, RouterProvider, HashRouter } from "react-router-dom";
import PageErro from "./routes/Erro";
import Home from "./routes/Home";
import Login, { action as actionLogin} from "./routes/Login";
import Header from "./components/Header";
import { useState } from "react";

import PaginateProducs, { action as actionPaginate } from "./routes/PaginateProducs";
import CreateLamina from "./routes/CreateLamina";


function App() {
  //let state  = useLocation();

  const [stateLogin, setStateLogin] = useState("")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header login={stateLogin}  />,
      errorElement: <PageErro />,
      children: [
        {index:true, element: <Home />},
        {
          path: "/login",
          element: <Login setLogin={setStateLogin}/>,
          errorElement: <PageErro />,
          action: actionLogin,
        },
        {
          path: "/produtos",
          element: <PaginateProducs />,
          errorElement: <PageErro />,
          //action: actionPaginate,
        },
        {
          path: "/criacao",
          element: <CreateLamina />,
          loader: { state: "BOBAAA" },
          errorElement: <PageErro />,
        },
      ],
    },
  ]);




  return (
      <RouterProvider router={router}/>
  );
}

export default App;
