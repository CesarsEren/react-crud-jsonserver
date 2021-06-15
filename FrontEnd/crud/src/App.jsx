import React, { Fragment } from "react";

import Sidebar from "./shared/Sidebar";
import Navbar from "./shared/Navbar";
import Productos from "./Productos/Productos";

import Categorias from "./Categorias/Categorias";

import NuevoCategoria from "./Categorias/NuevoCategoria";
import EditCategoria from "./Categorias/EditCategoria";


import NuevoProducto from "./Productos/NuevoProducto";
import EditProducto from "./Productos/EditProducto";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProductoComplementos from "./Productos/ProductoComplementos";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-content" id="panel">
        <Navbar />
        <Switch>
          <Route exact path="/categorias">
            <Categorias />
          </Route>
          <Route exact path="/categorias/:id">
            <EditCategoria />
          </Route>
          <Route exact path="/nuevo-categoria">
            <NuevoCategoria />
          </Route>
          
          

          <Route exact path="/producto/complementos/:id">
            <ProductoComplementos />
          </Route>
          <Route exact path="/productos">
            <Productos />
          </Route>
          <Route exact path="/productos/:id">
            <EditProducto />
          </Route>
          <Route exact path="/nuevo-producto">
            <NuevoProducto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
