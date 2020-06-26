//Ответ Апишки в JSON формате
export interface Response {
  success: boolean,
  signature?: string,
  orders?: Array<any>,
  sync_id?: string
}
