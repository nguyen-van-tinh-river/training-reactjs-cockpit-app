export interface MST_ORDER_DETAILS {
    _id         : string;
    order_id    : string;
    product_id  : string;
    detail_line : number;
    price_buy   : number;
    quantity    : number;
    shop_id     : string;
    receiver_id : string;
    _created?   : number;
    _modified?  : number;
}
