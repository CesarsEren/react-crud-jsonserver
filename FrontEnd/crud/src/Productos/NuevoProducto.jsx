/* eslint-disable react/jsx-pascal-case */
import React, { useState, ref, useRef, Fragment, useEffect } from "react";
import Cbo_Option from "../Components/Cbo_Option";
import { saveProducto } from "../services/api_productos";
import { getCategorias } from "../services/api_categorias";
import Header_in from "../shared/Header_in";

import Alert from "../Components/Alert";
import CardItem from "./CardItem";

export default function NuevoProducto() {
  const [cbos, setCbos] = useState([]);
  const [producto_imagen, setproducto_imagen] = useState();
  const [resultado, setResultado] = useState(false);

  const _getCategorias = async () => {
    return await getCategorias();
  };
  useEffect(() => {
    const OnlyGetCategorias = async () => {
      const res = await _getCategorias();
      res.data.map(({ categoria_id, categoria_nombre }) =>
        setCbos((prevCbos) => {
          return [...prevCbos, { value: categoria_id, text: categoria_nombre }];
        })
      );
    };
    OnlyGetCategorias();
  }, []);
  const inputNombre = useRef("inputNombre");
  const inputDescripcion = useRef("inputDescripcion");
  const inputPrecio = useRef("inputPrecio");
  const inputCategoria = useRef("inputCategoria");
  const inputUnitario = useRef("inputUnitario");
  const imageProducto = useRef("imageProducto");
  const fileProductoFoto = useRef("fileProductoFoto");

  const previewImg = (e) => {
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      var base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setproducto_imagen("data:image/;base64," + base64String);
      console.log(producto_imagen);
      imageProducto.current.src = URL.createObjectURL(file);
    };
    reader.readAsDataURL(file);
  };

  const guardar = async () => {
    //id: inputId.current.value,
    var data = {
      producto_nombre: inputNombre.current.value,
      producto_descripcion: inputDescripcion.current.value,
      producto_precio: inputPrecio.current.value,
      producto_imagen: producto_imagen ? producto_imagen : "",
      producto_unitario: inputUnitario.current.checked,
      categoria: {
        categoria_id: inputCategoria.current.value,
      },
    };

    var response = await saveProducto(data);
    if (response.data.producto_id) {
      setResultado(true);
      inputNombre.current.value = "";
      inputPrecio.current.value = "";
      inputDescripcion.current.value = "";
      inputCategoria.current.value = -1;
      inputUnitario.current.checked = false;
      imageProducto.current.src = "";
      fileProductoFoto.current.value = "";
    }
    //inputId.current.value = "";
  };
  return (
    <Fragment>
      <Header_in
        links={["productos", "nuevo-producto"]}
        historia={["Productos", "Nuevo producto"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="  col-lg-6 col-md-12 col-xs-12">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Nuevo Producto </h3>
              </div>

              <form className="container-fluid ">
                <div className="form-group">
                  <label htmlFor="inputnombre">Nombre</label>
                  <input
                    type="text"
                    ref={inputNombre}
                    className="form-control"
                    id="inputnombre"
                    placeholder="Ingrese Nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inprecio">Descripción</label>
                  <textarea
                    ref={inputDescripcion}
                    className="form-control"
                    placeholder="Ingrese descripción"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="inprecio">Precio</label>
                  <input
                    type="number"
                    ref={inputPrecio}
                    className="form-control"
                    id="inprecio"
                    placeholder="Ingrese precio"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="incate">Categoria</label>
                  <select className="custom-select" ref={inputCategoria}>
                    <Cbo_Option cbos={cbos} nombre="una Categoria"></Cbo_Option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inimagen">Imagen</label>
                  <input
                    ref={fileProductoFoto}
                    type="file"
                    className="form-control"
                    onChange={(e) => previewImg(e)}
                  />
                </div>
                <div className="form-group float-right">
                  <label htmlFor="inunitario">¿Es producto unitario?</label>
                  <input
                    className="ml-2"
                    id="inunitario"
                    ref={inputUnitario}
                    type="checkbox"
                  />
                </div>
                <div className="form-group">
                  <img
                    ref={imageProducto}
                    className=" m-auto"
                    height="150px"
                    width="180px"
                  />
                </div>

                <Alert
                  activo={resultado}
                  alert="success"
                  msg="Registro completo "
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
