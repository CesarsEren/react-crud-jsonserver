import React, { useState, ref, useRef } from "react";
import { saveProducto } from "../services/api_productos";

export default function NuevoProducto() {
  /*const [id, setId] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();*/

  const inputId = useRef("inputId");
  const inputNombre = useRef("inputNombre");
  const inputPrecio = useRef("inputPrecio");

  const guardar = () => {
    var data = {
      id: inputId.current.value,
      nombre: inputNombre.current.value,
      precio: inputPrecio.current.value,
    };
    saveProducto(data);
    inputId.current.value = "";
    inputNombre.current.value = "";
    inputPrecio.current.value = "";
  };
  return (
    <form className="container">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Id</label>
        <input
          type="number"
          className="form-control"
          ref={inputId}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Nombre</label>
        <input
          type="text"
          ref={inputNombre}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Precio</label>
        <input
          type="text"
          ref={inputPrecio}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <button onClick={guardar} type="button" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
