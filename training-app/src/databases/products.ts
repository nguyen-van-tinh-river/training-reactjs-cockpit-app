export interface MST_PRODUCTS {
    _id             : string;
    product_name    : string;
    product_image?  : string;
    product_price   : number;
    is_sales        : boolean;
    description?    : string;
    _created?       : number;
    _modified?      : number;
}
