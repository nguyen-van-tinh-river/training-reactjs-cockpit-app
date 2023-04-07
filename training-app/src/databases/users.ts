export interface MST_USERS {
    _id             : string;
    name            : string;
    email           : string;
    password        : string;
    remember_token? : string;
    verify_email?   : string;
    is_active       : boolean;
    is_delete       : boolean;
    group_role      : string;
    last_login_at?  : string;
    last_login_ip?  : string;
    _created?       : number;
    _modified?      : number;
}
