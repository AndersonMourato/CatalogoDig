import bootstrap from "bootstrap";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageErro from "./routes/Erro";
import Home from "./routes/Home";
import Login, { action as actionLogin} from "./routes/Login";
import Header from "./components/Header";
import { useState } from "react";
import Main from "./routes/Main";

import PaginateProducs from "./components/PaginateProducs";




function App() {

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
          path: "/main",
          element: <Main login={stateLogin}/>,
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
