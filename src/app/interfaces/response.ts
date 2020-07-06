//Ответ Апишки в JSON формате
export interface Response {
  success: string,
  signature?: string,
  orders?: Array<any>,
  sync_id?: string
}
