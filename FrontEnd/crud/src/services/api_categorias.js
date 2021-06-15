import axios from "axios";

const URL_BASE = "http://localhost:8080";

export default axios.create();

const getCategorias = async () => {
  return await axios.get(`${URL_BASE}/categorias`);
};

const findCategoriaById = async (id) => {
  return await axios.get(`${URL_BASE}/categorias/${id}`);
};

const saveCategoria = async (categoria) => {
  return await axios.post(`${URL_BASE}/categorias`, categoria);
};
const updateCategoria = async (id, categoria) => {
  return await axios.put(`${URL_BASE}/categorias/${id}`, categoria);
};
const deleteCategoria = async (id) => {
  return await axios.delete(`${URL_BASE}/categorias/${id}`);
};

export {
  getCategorias,
  findCategoriaById,
  saveCategoria,
  updateCategoria,
  deleteCategoria,
};
