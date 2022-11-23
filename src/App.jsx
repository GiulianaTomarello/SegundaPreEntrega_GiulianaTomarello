import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Container from "./components/ItemList/Container";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="*" element={<h1>La página ingresada no existe</h1>}/>
        <Route path="/" element={<Container />}/>
        <Route path="/category/:idCategory" element={<Container />}/>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
