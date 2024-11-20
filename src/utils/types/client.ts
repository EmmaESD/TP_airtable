export enum Status {
  CONTACTED = "contacted",
  NOT_CONTACTED = "not contacted",
  CONTACT_IN_FUTUR = "contact in futur",
}

export type Client = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
  status: Status;
};

export type Clients = Client[];
export type ClientDTO = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};
