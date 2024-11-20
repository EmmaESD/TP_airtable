import { useState } from "react";
import ClientForm from "../components/ClientForm/ClientForm";
import { Clients } from "../utils/types/client";

const HomePage = () => {
  const [clients, setClients] = useState<Clients>([]);

  return (
    <div>
      <ClientForm setClients={setClients} />
    </div>
  );
};

export default HomePage;
