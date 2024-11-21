import { useState } from "react";
import ClientForm from "../components/ClientForm/ClientForm";
import { Clients } from "../utils/types/client";

const HomePage = () => {
  const [clients, setClients] = useState<Clients>([]);

  return (
    <section className="flex justify-between w-full h-svh">
      <div className="flex p-20 justify-center items-center">
        <ClientForm setClients={setClients} />
      </div>
      <div className="bg-phone bg-center bg-cover w-full  ">
        <div className="flex flex-col justify-end items-center h-full p-20">
          <h2 className="text-4xl">Une Question ?</h2>
          <p className="text-xl">on vous recontacte</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
