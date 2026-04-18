import { apiRequest } from "./api";

export async function getProducts(params = {}) {
  const query = new URLSearchParams();
  if (params.pageNumber) query.set("pageNumber", params.pageNumber);
  if (params.pageSize) query.set("pageSize", params.pageSize);
  if (params.name) query.set("name", params.name);
  if (params.category) query.set("category", params.category);

  return apiRequest(`/api/commerce/products?${query.toString()}`);
}

export async function getProductById(id) {
  return apiRequest(`/api/commerce/products/${id}`);
}