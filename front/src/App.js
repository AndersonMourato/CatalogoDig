import bootstrap from "bootstrap"

import { useState, useEffect } from "react";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageContentsHome from './components/PageContentsHome';

function App() {

  const user = {
    nome:"",
    password:"",
    access: false
  }


  const [stateUser, setStateUser] = useState(user);


  useEffect(()=>{ 
    if(stateUser.access === true) console.log("LOGADO!");

  })



  return (
    <>
      <Header stateUser={stateUser} setStateUser={setStateUser} />
      <PageContentsHome />

      <Footer />
    </>
  );
}

export default App;
