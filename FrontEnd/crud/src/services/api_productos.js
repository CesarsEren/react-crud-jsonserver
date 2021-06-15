import axios from "axios";

const URL_BASE = "http://localhost:8080";

export default axios.create();

const getProductos = async () => {
  return await axios.get(`${URL_BASE}/productos`);
};

const findProductoById = async (id) => {
  return await axios.get(`${URL_BASE}/productos/${id}`);
};

const saveProducto = async (producto) => {
  return await axios.post(`${URL_BASE}/productos`, producto);
};
const updateProducto = async (id, producto) => {
  return await axios.put(`${URL_BASE}/productos/${id}`, producto);
};
const deleteProducto = async (id) => {
  return await axios.delete(`${URL_BASE}/productos/${id}`);
};

export {
  getProductos,
  findProductoById,
  saveProducto,
  updateProducto,
  deleteProducto,
};
