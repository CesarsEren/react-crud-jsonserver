import React from "react";
import { useEffect, useState } from "react";

//servicios
import { getProductos, deleteProducto } from "../services/api_productos";
//compoentes
import ItemProducto from "./ItemProducto";

export default function Productos() {
  const [listaproductos, setProductos] = useState([]);

  const findAllProductos = async () => {
    return await getProductos();
  };
  const eliminarProducto = async (id) => {
    const response = await deleteProducto(id);
    const listaactual = [...listaproductos];
    var getlista = listaactual.filter(producto =>producto.id !== id);
    setProductos(getlista);

    console.log(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await findAllProductos();
      setProductos(response.data);
    };
    getData();
  },[]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">precio</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {listaproductos.map((prd) => (
                <ItemProducto
                  key={prd.id}
                  producto={prd}
                  eliminarProducto={eliminarProducto}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
