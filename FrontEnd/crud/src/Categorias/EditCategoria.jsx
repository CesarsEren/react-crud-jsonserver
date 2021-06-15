import React, { useRef, useEffect, Fragment, useState } from "react";

import Header_in from "../shared/Header_in";

import Alert from "../Components/Alert";

import { useParams } from "react-router-dom";
import { updateCategoria, findCategoriaById } from "../services/api_categorias";
export default function EditCategoria() {
  const { id } = useParams();
  const [resultado, setResultado] = useState(false);
  const findCategoriaID = async (id) => {
    return await findCategoriaById(id);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await findCategoriaID(id);
      console.log(response.data);
      inputNombre.current.value = response.data.categoria_nombre;
    };
    getData();
  }, []);

  //const inputId = useRef("inputId");
  const inputNombre = useRef("inputNombre");

  const editar = async () => {
    var data = {
      categoria_id: id, //inputId.current.value,
      categoria_nombre: inputNombre.current.value,
    };
    const response = await updateCategoria(id, data);
    if (response.data.categoria_id) {
      setResultado(true);
    }
  };

  /*
  
   <div className="form-group">
                  <label htmlFor="inputid">Id</label>
                  <input
                    type="number"
                    className="form-control"
                    ref={inputId}
                    id="inputid"
                    placeholder="Ingrese Id"
                  />
                </div>
  */
  return (
    <Fragment>
      <Header_in
        links={["categorias"]}
        historia={["Categorias", "Editar Categoria"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className=" col-lg-6 col-md-12 col-xs-12">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Editar Categoria </h3>
              </div>
              <form className="container-fluid ">
                <div className="form-group">
                  <label htmlFor="inputcategoria_nombre">Nombre</label>
                  <input
                    type="text"
                    ref={inputNombre}
                    className="form-control"
                    id="inputcategoria_nombre"
                    placeholder="Ingrese Nombre"
                  />
                </div>
                <Alert
                  activo={resultado}
                  alert="info"
                  msg="Categoria Actualizado "
                />
                <button
                  onClick={editar}
                  type="button"
                  className="btn btn-primary float-right"
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
