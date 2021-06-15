import React, { useRef, useEffect, Fragment, useState } from "react";

import Header_in from "../shared/Header_in";

import Alert from "../Components/Alert";

import { saveCategoria } from "../services/api_categorias";
export default function NuevoCategoria() {
  const inputId = useRef("inputId");
  const inputNombre = useRef("inputNombre");

  const [resultado, setResultado] = useState(false);
  const guardar = async () => {
    var data = {
      categoria_nombre: inputNombre.current.value,
    };
    const response = await saveCategoria(data);
    if (response.data.categoria_id) {
      setResultado(true);
    }
  };
  return (
    <Fragment>
      <Header_in
        links={["categorias", "nuevo-categoria"]}
        historia={["Categorias", "Nueva categoria"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className=" col-lg-6 col-md-12 col-xs-12">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Nuevo Categoria </h3>
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
                  alert="success"
                  msg="Categoria Registrada "
                />
                <button
                  onClick={guardar}
                  type="button"
                  className="btn btn-primary float-right"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
