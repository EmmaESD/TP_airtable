import { useEffect, useState } from "react";
import { getClients } from "../utils/airtable";
import { Clients } from "../utils/types/client";
import Chip from "../components/Chip/Chip";

const AdminPage = () => {
  const [clients, setClients] = useState<Clients>([]);
  useEffect(() => {
    getClients(setClients);
  }, []);
  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          ID: {client.id} - {client.firstname} - {client.lastname} -{" "}
          {client.email} - {client.phone} - <Chip status={client.status} />
        </li>
      ))}
    </ul>
  );
};

export default AdminPage;
