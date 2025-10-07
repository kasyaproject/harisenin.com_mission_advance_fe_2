import { apiInstanceMockapi } from "@/lib/axios/instance";
import { IProduct } from "@/types/Product";
import endpoint from "./endpoint.constant";

const productServices = {
  getAllProducts: () => apiInstanceMockapi.get(`${endpoint.PRODUCTS}`),
  getProductById: (id: string) =>
    apiInstanceMockapi.get(`${endpoint.PRODUCTS}/${id}`),
  addProduct: (payload: IProduct) =>
    apiInstanceMockapi.post(`${endpoint.PRODUCTS}`, payload),
  updateProduct: (id: string, payload: IProduct) =>
    apiInstanceMockapi.put(`${endpoint.PRODUCTS}/${id}`, payload),
  deleteProduct: (id: string) =>
    apiInstanceMockapi.delete(`${endpoint.PRODUCTS}/${id}`),
};

export default productServices;
