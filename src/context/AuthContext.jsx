import { createContext, useContext, useEffect, useState } from "react";
import {
  clearCustomerToken,
  getCustomerToken,
  setCustomerToken,
} from "../services/api";
import { getProfile } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getCustomerToken();
    if (token) {
      getProfile()
        .then((res) => setUser(res?.User ?? res?.data ?? null))
        .catch(() => clearCustomerToken())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  function login(token, userData) {
    setCustomerToken(token);
    setUser(userData);
  }

  function logout() {
    clearCustomerToken();
    setUser(null);
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuth: !!user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}