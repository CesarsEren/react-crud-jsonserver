import React from "react";
import { Link } from "react-router-dom";

export default function ItemProducto({ producto, eliminarProducto }) {
  const eliminar = () => {
    eliminarProducto(producto.id);
  };
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>
        <Link to={"/editar/" + producto.id}>editar</Link>
        <button onClick={eliminar} className="btn btn-danger btn-sm">
          X
        </button>
      </td>
    </tr>
  );
}
