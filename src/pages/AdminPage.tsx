import { useEffect, useState } from "react";
import { Clients } from "../utils/types/client";
import { getClients } from "../utils/airtable";
import Chip from "../components/Chip/Chip";
import deleteClient from "../utils/airtable/delete";
import { updateClient } from "../utils/airtable/updateClient";

const AdminPage = () => {
  const [clients, setClients] = useState<Clients>([]);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [editedClient, setEditedClient] = useState<Partial<Clients[number]>>(
    {}
  );

  useEffect(() => {
    getClients(setClients);
  }, []);

  const handleDeleteClient = (clientId: string) => {
    deleteClient(clientId, setClients);
  };

  const handleEditClient = (client: Clients[number]) => {
    setEditingClientId(client.id);
    setEditedClient(client);
  };

  const handleSaveClient = async () => {
    console.log(editedClient);
    if (editingClientId) {
      await updateClient(editingClientId, editedClient);
      setEditingClientId(null);
      getClients(setClients);
    }
  };

  const handleCancelEdit = () => {
    setEditingClientId(null);
    setEditedClient({});
  };

  const handleChange = (key: keyof Clients[number], value: string) => {
    setEditedClient((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="bg-bgGrey p-8">
      <section className="bg-white p-4 rounded-xl">
        {/* En-tête */}
        <div
          className="px-4 grid font-medium leading-8 text-left"
          style={{
            gridTemplateColumns: "1.5fr 1fr 1fr 2fr 1fr 1fr 1fr 2fr auto",
          }}
        >
          <p>Identifiant</p>
          <p>Prénom</p>
          <p>Nom</p>
          <p>Email</p>
          <p>Téléphone</p>
          <p>Notes</p>
          <p>Date</p>
          <p>Statut</p>
          <p>Action</p>
        </div>

        <div className="flex flex-col mt-2">
          {clients.map((client) =>
            editingClientId === client.id ? (
              <div
                key={client.id}
                className="grid items-center p-2 bg-gray-50 rounded-lg shadow-sm mt-1"
                style={{
                  gridTemplateColumns:
                    "1.75fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr auto",
                }}
              >
                <p className="text-xs m-5">{client.id}</p>
                <input
                  className="text-xs border border-gray-300 rounded px-2"
                  value={editedClient.firstname || ""}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                <input
                  className="text-xs border border-gray-300 rounded px-2"
                  value={editedClient.lastname || ""}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                <input
                  className="text-xs border border-gray-300 rounded px-2"
                  value={editedClient.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                  className="text-xs border border-gray-300 rounded px-2"
                  value={editedClient.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                <textarea
                  className="text-xs border border-gray-300 rounded px-2"
                  value={editedClient.notes || ""}
                  onChange={(e) => handleChange("notes", e.target.value)}
                />
                <p className="text-xs">{client.created_at}</p>

                <select
                  value={editedClient.status || client.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2"
                >
                  <option value="Actif">Actif</option>
                  <option value="Inactif">Inactif</option>
                  <option value="En attente">En attente</option>
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={handleSaveClient}
                    className="bg-pinkLight text-white px-3 py-1 rounded text-xs"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-pinkLight text-white px-3 py-1 rounded text-xs"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={client.id}
                className="grid items-center p-2 bg-gray-50 rounded-lg shadow-sm mt-1"
                style={{
                  gridTemplateColumns:
                    "1.75fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr auto",
                }}
              >
                <p className="text-xs m-5">{client.id}</p>
                <p className="text-xs">{client.firstname}</p>
                <p className="text-xs">{client.lastname}</p>
                <p className="text-xs">{client.email}</p>
                <p className="text-xs">{client.phone}</p>
                <p className="text-xs">{client.notes}</p>
                <p className="text-xs">{client.created_at}</p>
                <Chip status={client.status} />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditClient(client)}
                    className="bg-pinkLight text-white px-3 py-1 rounded text-xs"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDeleteClient(client.id)}
                    className="bg-pinkLight hover:bg-chipPink text-white px-3 py-1 rounded text-xs"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
