import { useState, useEffect } from "react";
import { getCart } from "../services/cartService";

export function useCart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchCart() {
    setLoading(true);
    setError("");
    try {
      const res = await getCart();
      setCart(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return { cart, loading, error, refetch: fetchCart };
}