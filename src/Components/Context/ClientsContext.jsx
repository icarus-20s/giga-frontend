// ClientsContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../Api";

const MEDIA_URL = import.meta.env.VITE_MEDIA_API_URL;
const ClientsContext = createContext([]);

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("clients/")
      .then(res => setClients(res.data.map(c => ({
        ...c,
        logo: c.logo ? `${MEDIA_URL}${c.logo}` : "",
      }))))
      .catch(console.error);
  }, []);

  return (
    <ClientsContext.Provider value={clients}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClientsContext = () => useContext(ClientsContext);
