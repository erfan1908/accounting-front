import { OrderModel } from "./order-model";

export interface OrdersResponse{
    "orders": OrderModel[],
    "status": string,
    "totalOrderCount": number
}