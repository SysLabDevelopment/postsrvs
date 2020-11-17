export interface Order {
    id: number;
    client_id: string | number;
    goods?: Array<any>;
    quants?: any;
    email_input?: any;
    phone_input?: any;
    selectedPayment?: string;
    rur?: number;
    selectedReason?: any;
    new_plan_date?: string;
    commentText?: string;
    status_id: number;
    check?: string;
    lt?: string;
    lg?: string;
    client_phone?: string;
    courier_phone?: string;
    client_address?: string;
    datetime_from?: string;
    datetime_to?: string;
    status_text?: string;
    client_status?: string;
    client_status_dt?: string;
    client_status_id?: number;
    vlog?: string;
    poruch?: string;
    mass?: unknown;
    amount?: unknown;
    Podrazd?: unknown;
    client_state?: unknown;
    r_url?: unknown;
    client_fio?: string;
    client_name?: string;
    company_address?: string;
    company: string;
    Cname?: string;
    Cadress?: string;
    Cphone?: string;
    Cphone_s?: string;
    cardNums?: string;
    pay_type_change_allowed?: Boolean; // Можно ли изменять тип оплаты?
    pay_type?: string; // Тип оплаты
    required: boolean;
    overdue: string;
    waitingMinutes?: number;
    show?: boolean;
    confirm?: string;
}
