import { apiRequest } from "./api";

export async function getOrders() {
  return apiRequest("/api/commerce/orders", {}, true);
}

export async function getOrderById(id) {
  return apiRequest(`/api/commerce/orders/${id}`, {}, true);
}

export async function cancelOrder(id, reason) {
  return apiRequest(
    `/api/commerce/orders/${id}/cancel`,
    {
      method: "POST",
      body: JSON.stringify({ reason }),
    },
    true
  );
}