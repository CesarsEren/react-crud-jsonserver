import React from "react";
import { useEffect, useState, Fragment } from "react";

//servicios
import { getCategorias, deleteCategoria } from "../services/api_categorias";
//compoentes
import ItemCategoria from "./ItemCategoria";
import Header_in from "../shared/Header_in";

export default function Categorias() {
  const [listacategorias, setCategorias] = useState([]);

  const findAllCategorias = async () => {
    return await getCategorias();
  };
  const eliminarCategoria = async (id) => {
    const response = await deleteCategoria(id);
    const listaactual = [...listacategorias];
    var getlista = listaactual.filter((cat) => cat.categoria_id !== id);
    setCategorias(getlista);

    console.log(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await findAllCategorias();
      setCategorias(response.data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Header_in
        links={["categorias", "nuevo-categoria"]}
        historia={["Categorias", "Lista"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Lista de Categorias </h3>
              </div>
              <table className="table  table-responsive-sm align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="sort">
                      #
                    </th>
                    <th scope="col" className="sort">
                      Nombre
                    </th>
                    <th scope="col" className="sort">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listacategorias.map((cat) => (
                    <ItemCategoria
                      key={cat.categoria_id}
                      categoria={cat}
                      eliminarCategoria={eliminarCategoria}
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
