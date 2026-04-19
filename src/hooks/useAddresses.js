import { useState, useEffect } from "react";
import { getAddresses } from "../services/addressService";

export function useAddresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchAddresses() {
    setLoading(true);
    setError("");
    try {
      const res = await getAddresses();
      setAddresses(res.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAddresses();
  }, []);

  return { addresses, loading, error, refetch: fetchAddresses };
}