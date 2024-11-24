import connectAirtable from "./connect";
import { Clients } from "../types/client";

const deleteClient = (
  clientId: string,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Table 1";
  const table = base(TABLE_NAME);

  table.destroy(clientId, (error) => {
    if (error) {
      console.error("Erreur lors de la suppression :", error);
      return;
    }

    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== clientId)
    );
    console.log(`Client avec l'ID ${clientId} supprimé avec succès.`);
  });
};

export default deleteClient;
