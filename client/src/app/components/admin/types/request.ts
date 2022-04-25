import {Client} from "./client";
import {RequestType} from "./requestType";
import {RequestStatus} from "./requestStatus";

export interface Request {
  id: number;
  address: string;
  contractLink: string | null;
  client_id: number;
  type_id: number;
  worker_id: number;
  status_id: number;
  datetimeComplite: string;
  createdAt: string;
  updatedAt: string;
  client: Client;
  type: RequestType;
  worker: Worker;
  status: RequestStatus;
}
