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
    <main className="bg-bgGrey p-8 ">
      <section className="flex flex-row justify-between bg-white rounded-xl ">
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Identifiant</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.id}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Prénom</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.firstname}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Nom</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.lastname}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Email</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.email}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Téléphone</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.phone}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Notes</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.notes}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-2 items-start">
          <p className="font-medium leading-8">Date</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-3">
              <p className="text-xs">{client.created_at}</p>
            </div>
          ))}
        </div>
        <div className="p-10 flex flex-col gap-1.5 items-start">
          <p className="font-medium leading-8">Statut</p>
          {clients.map((client) => (
            <div key={client.id} className="flex w-full gap-1">
              <Chip status={client.status} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
