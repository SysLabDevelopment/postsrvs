// Ответ Апишки в JSON формате
import { Order } from './order';
export interface Response {
  success?: string | boolean;
  signature?: string;
  orders?: Array<Order>;
  sync_id?: string | number;
  res_more?: Array<Order>;
  [key: string]: any;
}
