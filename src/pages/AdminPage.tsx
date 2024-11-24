import { useEffect, useState } from "react";
import { Clients } from "../utils/types/client";
import { getClients } from "../utils/airtable";
import Chip from "../components/Chip/Chip";
import deleteClient from "../utils/airtable/delete";

const AdminPage = () => {
  const [clients, setClients] = useState<Clients>([]);

  useEffect(() => {
    getClients(setClients);
  }, []);

  const handleDeleteClient = (clientId: string) => {
    deleteClient(clientId, setClients); // Appeler la méthode pour supprimer un client
  };

  return (
    <main className="bg-bgGrey p-8">
      <section className="bg-white p-4 rounded-xl">
        <div className="flex font-medium leading-8">
          <p className="w-32">Identifiant</p>
          <p className="w-32">Prénom</p>
          <p className="w-32">Nom</p>
          <p className="w-48">Email</p>
          <p className="w-32">Téléphone</p>
          <p className="w-32">Notes</p>
          <p className="w-32">Date</p>
          <p className="w-32">Statut</p>
          <p className="w-32">Action</p>
        </div>

        <div className="flex flex-col j mt-2">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm"
            >
              <p className=" text-xs">{client.id}</p>
              <p className=" text-xs">{client.firstname}</p>
              <p className=" text-xs">{client.lastname}</p>
              <p className=" text-xs">{client.email}</p>
              <p className=" text-xs">{client.phone}</p>
              <p className=" text-xs">{client.notes}</p>
              <p className=" text-xs">{client.created_at}</p>
              <div className="">
                <Chip status={client.status} />
              </div>
              <button
                onClick={() => handleDeleteClient(client.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-xs"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
