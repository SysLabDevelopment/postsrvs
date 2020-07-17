//Ответ Апишки в JSON формате
import{Order}from './order';
export interface Response {
  success?: string,
  signature?: string,
  orders?: Array<any>,
  sync_id?: string,
  res_more?: Array<Order>,
  [key:string]:any
}
