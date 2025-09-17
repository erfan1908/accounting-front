import { TicketModel } from "./ticket-model"

export interface TicketResponse{
    "status": string,
    "tickets":TicketModel[],
    "totalTicketCount": number

}