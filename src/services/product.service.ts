import { apiInstanceMockapi } from "@/lib/axios/instance";
import { IProduct } from "@/types/Product";
import endpoint from "./endpoint.constant";

const productServices = {
  getAllProducts: () => apiInstanceMockapi.get(`${endpoint.PRODUCTS}`),
  getProductById: async (id: string) => {
    const url = `/products/${id}`;

    const response = await apiInstanceMockapi.get(url);
    if (response.status === 200) return response.data;
  },
  addProduct: async (payload: IProduct) => {
    const url = `/products`;
    const response = await apiInstanceMockapi.post(url, payload);
    if (response.status === 201) return response.data;
  },
  updateProduct: async (id: string, payload: IProduct) => {
    const url = `/products/${id}`;
    const response = await apiInstanceMockapi.put(url, payload);
    if (response.status === 200) return response.data;
  },
  deleteProduct: async (id: string) => {
    const url = `/products/${id}`;
    const response = await apiInstanceMockapi.delete(url);
    if (response.status === 200) return response.data;
  },
};

export default productServices;
