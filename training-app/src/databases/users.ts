export interface MST_USERS {
    id              : number;
    name            : string;
    email           : string;
    password        : string;
    remember_token  : string;
    verify_email    : string;
    is_active       : boolean;
    is_delete       : boolean;
    group_role      : string;
    last_login_at   : string;
    last_login_ip   : string;
    created_at      : string;
    updated_at      : string;
}

export interface PARAMS_SEARCH_MST_USERS {
    name            : string;
    email           : string;
    is_active       : boolean;
    group_role      : string;
}
