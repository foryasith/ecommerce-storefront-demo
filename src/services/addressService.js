import { apiRequest } from "./api";

export async function getAddresses() {
  return apiRequest("/api/commerce/addresses", {}, true);
}

export async function createAddress(data) {
  return apiRequest(
    "/api/commerce/addresses",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    true
  );
}

export async function updateAddress(id, data) {
  return apiRequest(
    `/api/commerce/addresses/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    },
    true
  );
}

export async function deleteAddress(id) {
  return apiRequest(
    `/api/commerce/addresses/${id}`,
    { method: "DELETE" },
    true
  );
}