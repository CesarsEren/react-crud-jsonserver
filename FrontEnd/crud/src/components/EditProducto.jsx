import React,{useRef,useEffect} from "react";
import { useParams} from "react-router-dom";
import { updateProducto,findProductoById } from "../services/api_productos";
export default function EditProducto() {
  const { id } = useParams();
  const findProductID = async (id)=>{
    return await findProductoById(id);
  }
  
  useEffect(() => {
    const getData = async () => {
      const response = await findProductID(id);
      inputId.current.value = response.data.id;
      inputNombre.current.value = response.data.nombre;
      inputPrecio.current.value = response.data.precio;     
    };
    getData();
  },[]);
  
  const inputId = useRef("inputId");
  const inputNombre = useRef("inputNombre");
  const inputPrecio = useRef("inputPrecio");

  const editar = () => {
    var data = {
      id: inputId.current.value,
      nombre: inputNombre.current.value,
      precio: inputPrecio.current.value,
    };
    updateProducto(id,data); 
  };
  return ( <form className="container">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Id</label>
    <input
      type="number"
      className="form-control"
      ref={inputId}
      disabled
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

  <button onClick={editar} type="button" className="btn btn-primary">
    Edit
  </button>
</form>
  );
}
