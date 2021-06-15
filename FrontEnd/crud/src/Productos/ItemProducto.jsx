import React from "react";
import { Link } from "react-router-dom";

export default function ItemProducto({ producto, eliminarProducto }) {
  const eliminar = () => {
    eliminarProducto(producto);
  };
  if(producto.producto_unitario) {
  return (
    <tr>
      <td>{producto.producto_id}</td>
      <td>
        <img src={producto.producto_imagen} width="125px" height="105px"></img>
      </td>
      <td>{producto.producto_nombre}</td>
      <td>S/ {producto.producto_precio}</td>
      <td>{producto.categoria.categoria_nombre}</td>
      <td className="text-right">
        <div className="dropdown">
          <a
            className="btn btn-sm btn-icon-only text-light"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow"> 
             <Link
              className="dropdown-item"
              to={"/productos/" + producto.producto_id}
            >
              Editar
            </Link>
            <span className="dropdown-item" onClick={eliminar}>
              Eliminar
            </span>
          </div>
        </div>
      </td>
    </tr>
  ); 
}else{
  return (
    <tr>
      <td>{producto.producto_id}</td>
      <td>
        <img src={producto.producto_imagen} width="125px" height="105px"></img>
      </td>
      <td>{producto.producto_nombre}</td>
      <td>S/ {producto.producto_precio}</td>
      <td>{producto.categoria.categoria_nombre}</td>
      <td className="text-right">
        <div className="dropdown">
          <a
            className="btn btn-sm btn-icon-only text-light"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            
            <Link
              className="dropdown-item"
              to={"/producto/complementos/" + producto.producto_id}> 
              Añadir Complementos
            </Link>
             <Link
              className="dropdown-item"
              to={"/productos/" + producto.producto_id}
            >
              Editar
            </Link>
            <span className="dropdown-item" onClick={eliminar}>
              Eliminar
            </span>
          </div>
        </div>
      </td>
    </tr>
  ); 
}
}
