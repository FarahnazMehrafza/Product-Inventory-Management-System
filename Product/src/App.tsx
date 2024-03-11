import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  NavBar  from "../src/Components/Navbar";
import  Home from "../src/pages/Home";
import  Favorites  from "../src/pages/Favorites";
import  EditProduct  from "../src/Pages/EditProduct";
import  AddProduct  from "../src/Pages/AddProduct";




export function App() {
  return (
      <BrowserRouter>
        <NavBar />
          <Route path="/" >
            <Home/>
          </Route>
          <Route path="../Pages/Favorites">
            <Favorites/>
          </Route>
          <Route path="../Pages/AddProduct">
            <AddProduct/>
          </Route>
          <Route path="../Pages/EditProduct">
            <EditProduct/>
          </Route>
      </BrowserRouter>
   
  )
};