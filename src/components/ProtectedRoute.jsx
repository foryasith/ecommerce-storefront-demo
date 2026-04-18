import { Navigate } from "react-router-dom";
import { getCustomerToken } from "../services/api";

export default function ProtectedRoute({ children }) {
  const token = getCustomerToken();
  if (!token) return <Navigate to="/login" replace />;
  return children;
}