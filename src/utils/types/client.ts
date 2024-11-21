export enum Status {
  CONTACTED = "contacted",
  NOT_CONTACTED = "not_contacted",
  CONTACT_IN_FUTUR = "in_progress",
}

export type Client = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
  status: Status;
  created_at: any;
};

export type Clients = Client[];
export type ClientDTO = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};
