import { apiRequest } from "./api";

export async function getCart() {
  return apiRequest("/api/commerce/cart", {}, true);
}

export async function addCartItem(productId, quantity) {
  return apiRequest(
    "/api/commerce/cart/items",
    {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    },
    true
  );
}

export async function updateCartItem(itemId, quantity) {
  return apiRequest(
    `/api/commerce/cart/items/${itemId}`,
    {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    },
    true
  );
}

export async function removeCartItem(itemId) {
  return apiRequest(
    `/api/commerce/cart/items/${itemId}`,
    { method: "DELETE" },
    true
  );
}

export async function clearCart() {
  return apiRequest("/api/commerce/cart", { method: "DELETE" }, true);
}