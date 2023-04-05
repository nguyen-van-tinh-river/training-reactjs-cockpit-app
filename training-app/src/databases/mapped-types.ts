export interface MST_PRODUCT {
    product_id      : string;
    product_name    : string;
    product_image   : string;
    product_price   : number;
    is_sales        : number;
    description     : string;
    created_at      : string;
    updated_at      : string;
}

export interface MST_SHOP {
    shop_id     : number;
    shop_name   : string;
    created_at  : string;
    updated_at  : string;
}

export interface MST_CUSTOMERS {
    customer_id     : number;
    customer_name   : string;
    email           : string;
    tel_num         : string;
    address         : string;
    is_active       : number;
    created_at      : string;
    updated_at      : string;
}

export interface MST_ORDERS {
    order_id        : number;
    order_shop      : string;
    customer_id     : number;
    total_price     : number;
    payment_method  : number;
    ship_charge     : number;
    tax             : number;
    order_date      : string;
    shipment_date   : string;
    order_status    : number;
    cancel_date     : string;
    note_customer   : string;
    error_code_api  : string;
    created_at      : string;
    updated_at      : string;
}

export interface MST_ORDER_DETAILS {
    order_id    : number;
    detail_line : number;
    product_id  : string;
    price_buy   : number;
    quantity    : number;
    shop_id     : number;
    receiver_id : number;
    created_at  : string;
    updated_at  : string;
}
