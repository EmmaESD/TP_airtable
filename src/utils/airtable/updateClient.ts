import { Clients } from "../types/client";
import connectAirtable from "./connect";

const base = connectAirtable();

export const updateClient = async (
  id: string,
  data: Partial<Clients[number]>
) => {
  try {
    await base("Clients").update(id, data);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
  }
};
