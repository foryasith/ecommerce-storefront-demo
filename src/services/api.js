const API_BASE_URL =
  import.meta.env.VITE_CUSTOMER_API_BASE_URL ?? "http://localhost:5002";

const TOKEN_KEY = "customer_jwt";

export function getCustomerToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setCustomerToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearCustomerToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  window.location.href = "/login";
}

export async function apiRequest(path, options = {}, requiresAuth = false) {
  const headers = new Headers(options.headers ?? {});

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  if (requiresAuth) {
    const token = getCustomerToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    clearCustomerToken();
    window.location.href = "/login";
    throw new Error("Session expired. Please log in again.");
  }

  if (response.status === 204) return null;

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body?.message ?? "Request failed.");
  }

  return body;
}