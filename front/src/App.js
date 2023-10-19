import bootstrap from "bootstrap";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageErro from "./routes/Erro";
import Home from "./routes/Home";
import Login, { action as actionLogin} from "./routes/Login";
import Header from "./components/Header";
import { useState } from "react";




function App() {

  const [login, setLogin] = useState("")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header login={login}  />,
      errorElement: <PageErro />,
      children: [
        {index:true, element: <Home />},
        {
          path: "/login",
          element: <Login setLogin={setLogin}/>,
          action: actionLogin,
        },
      ],
    },
  ]);




  return (
      <RouterProvider router={router}/>
  );
}

export default App;
