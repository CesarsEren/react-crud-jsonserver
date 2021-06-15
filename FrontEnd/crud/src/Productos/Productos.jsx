import React from "react";
import { useEffect, useState, Fragment } from "react";
import Swal from "sweetalert2";
//servicios
import { getProductos, deleteProducto } from "../services/api_productos";
//compoentes
import ItemProducto from "./ItemProducto";
import Header_in from "../shared/Header_in";

export default function Productos() {
  const [listaproductos, setProductos] = useState([]);

  const findAllProductos = async () => {
    return await getProductos();
  };
  const eliminarProducto = async (prd) => {
    Swal.fire({
      title: "Desea Eliminar " + prd.producto_nombre,
      text: "Este cambio no es reversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si,Eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteProducto(prd.producto_id);
        const listaactual = [...listaproductos];
        var getlista = listaactual.filter(
          (producto) => producto.producto_id !== prd.producto_id
        );
        setProductos(getlista);

        Swal.fire(
          "Eliminado!",
          `El producto ${prd.producto_nombre} fue eliminado`,
          "success"
        );
      }
    });
    /*
    const response = await deleteProducto(id);
    const listaactual = [...listaproductos];
    var getlista = listaactual.filter((producto) => producto.producto_id !== id);
    setProductos(getlista);

    console.log(response.data);*/
  };

  useEffect(() => {
    const getData = async () => {
      const response = await findAllProductos();
      setProductos(response.data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Header_in
        links={["productos", "nuevo-producto"]}
        historia={["Productos", "Lista"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Lista de Productos </h3>
              </div>
              <table className="table table-responsive-md table-responsive-sm align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="sort">
                      #
                    </th>
                    <th scope="col" className="sort">
                      imagen
                    </th>
                    <th scope="col" className="sort">
                      nombre
                    </th>
                    <th scope="col" className="sort">
                      precio
                    </th>
                    <th scope="col" className="sort">
                      categoria
                    </th>
                    <th scope="col" className="sort">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listaproductos.map((prd) => (
                    <ItemProducto
                      key={prd.producto_id}
                      producto={prd}
                      eliminarProducto={eliminarProducto}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
