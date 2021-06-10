import React, { Fragment } from "react";
import Header from "./shared/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditProducto from "./components/EditProducto";


import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/productos">
          <Productos />
        </Route>
        <Route exact path="/editar/:id">
          <EditProducto />
        </Route>
        <Route exact path="/nuevo-producto">
          <NuevoProducto />
        </Route>
      </Switch>
    </Router>
  );
}
