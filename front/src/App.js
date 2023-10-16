import bootstrap from "bootstrap"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageContentsHome from './components/PageContentsHome';
import PageErro from "./components/PageErro";

function App() {


  let PageContents = ()=>{
    return (
      <h1> ERRO, USER NÃO LOGADO! </h1>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageContentsHome />,
      errorElement: <PageErro />,
    },
    {
      path: "/login",
      element: <PageContents />,
      errorElement: <PageErro />,
    },
  ]);

  useEffect(()=>{
    <Header />
})


  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
