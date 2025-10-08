import { apiInstanceMockapi } from "@/lib/axios/instance";

const getAllProducts = async () => {
  const response = await apiInstanceMockapi.get("/products");
  return response.data;
};

export default { getAllProducts };
