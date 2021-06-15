import { useParams } from "react-router-dom";
import { updateProducto, findProductoById } from "../services/api_productos";
import Cbo_Option from "../Components/Cbo_Option";
import Alert from "../Components/Alert";
import { getCategorias } from "../services/api_categorias";

import React, { useState, ref, useRef, Fragment, useEffect } from "react";

import Header_in from "../shared/Header_in";

export default function EditProducto() {
  const { id } = useParams();
  const [cbos, setCbos] = useState([]);
  const [resultado, setResultado] = useState(false);
  const [producto_imagen, setproducto_imagen] = useState();

  const _getCategorias = async () => {
    return await getCategorias();
  };

  const findProductID = async (id) => {
    return await findProductoById(id);
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
    const getData = async () => {
      const response = await findProductID(id);
      inputNombre.current.value = response.data.producto_nombre;
      inputPrecio.current.value = response.data.producto_precio;
      inputCategoria.current.value = response.data.categoria.categoria_id;
      inputDescripcion.current.value = response.data.producto_descripcion;
      inputUnitario.current.checked = response.data.producto_unitario;
      imageProducto.current.src = response.data.producto_imagen;
      setproducto_imagen(response.data.producto_imagen);
    };
    getData();
  }, []);
  const inputNombre = useRef("inputNombre");
  const inputDescripcion = useRef("inputDescripcion");
  const inputPrecio = useRef("inputPrecio");
  const inputCategoria = useRef("inputCategoria");
  const inputUnitario = useRef("inputUnitario");
  const imageProducto = useRef("imageProducto");

  const previewImg = (e) => {
    const file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      var base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setproducto_imagen("data:image/;base64," + base64String);

      imageProducto.current.src = URL.createObjectURL(file);
    };
  };

  const editar = async () => {
    console.log("producto_imagen" + producto_imagen);
    const prd_image = producto_imagen;
    var data = {
      producto_id: id,
      producto_nombre: inputNombre.current.value,
      producto_descripcion: inputDescripcion.current.value,
      producto_precio: inputPrecio.current.value,
      producto_imagen: prd_image,
      producto_unitario: inputUnitario.current.checked,
      categoria: {
        categoria_id: inputCategoria.current.value,
      },
    };
    var response = await updateProducto(id, data);
    if (response.data.producto_id) {
      setResultado(true);
    }
  };

  return (
    <Fragment>
      <Header_in
        links={["productos"]}
        historia={["Productos", "Editar producto"]}
      />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className=" col-lg-6 col-md-12 col-xs-12">
            <div className="card py-4">
              <div className="card-header border-0">
                <h3 className="mb-0">Editar Producto </h3>
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
                  alert="info"
                  msg="Registro Actualizado con éxito."
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
