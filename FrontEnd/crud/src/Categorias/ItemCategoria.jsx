import React from "react";
import { Link } from "react-router-dom";

export default function ItemCategoria({ categoria, eliminarCategoria }) {
  const eliminar = () => {
    eliminarCategoria(categoria.categoria_id);
  };
  return (
    <tr>
      <td>{categoria.categoria_id}</td>
      <td>{categoria.categoria_nombre}</td>
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
            <Link className="dropdown-item" to={"/categorias/" + categoria.categoria_id}>
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
