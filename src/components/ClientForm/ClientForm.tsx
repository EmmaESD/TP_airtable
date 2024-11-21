import { useState } from "react";
import { ClientDTO, Clients } from "../../utils/types/client";
import { createClient } from "../../utils/airtable";

const ClientForm = ({
  setClients,
}: {
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}) => {
  const [formData, setFormData] = useState<ClientDTO>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    createClient(formData, setClients);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <section className="flex flex-col gap-12 items-center justify-center overflow-hidden">
      <h2 className="text-xl">Entrez vos coordonnées</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center justify-center"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="firstname">Votre prénom</label>
            <input
              className="bg-grey rounded-sm p-1"
              type="text"
              name="firstname"
              placeholder="Prénom"
              onChange={handleChange}
              value={formData.firstname}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname">Votre nom</label>
            <input
              className="bg-grey rounded-sm p-1"
              type="text"
              name="lastname"
              placeholder="Votre Nom"
              onChange={handleChange}
              value={formData.lastname}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Votre email</label>
            <input
              className="bg-grey rounded-sm w-full p-1"
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone">Votre téléphone</label>
            <input
              className="bg-grey rounded-sm w-full p-1"
              type="text"
              name="phone"
              placeholder="Votre téléphone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
        </div>
        <button
          className="bg-pinkLight w-fit py-2 px-4 rounded-xl p-1"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default ClientForm;
