export interface MST_ORDERS {
    _id             : string;
    order_shop      : string;
    customer_id     : string;
    total_price     : number;
    payment_method  : number;
    ship_charge     : number;
    tax             : number;
    order_date      : Date;
    shipment_date   : Date;
    cancel_date     : Date;
    order_status    : number;
    note_customer?  : string;
    error_code_api? : string;
    _created?       : number;
    _modified?      : number;
}
