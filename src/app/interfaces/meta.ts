import { Order } from './order';

export interface Meta {
    label: string,
    lt?: number,
    lg?: number,
    order?:Order
}
