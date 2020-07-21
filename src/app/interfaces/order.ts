export interface Order {
    id:number,
    client_id:number,
    goods?:Array<any>, 
    quants?:any,
    email_input?:any,
    phone_input?:any,
    selectedPayment?:string,
    rur?:number,
    selectedReason?: any,
    new_plan_date?: string,
    commentText?:string,
    status_id:number,
    check?:string
}
