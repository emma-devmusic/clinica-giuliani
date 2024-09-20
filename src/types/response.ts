export interface LoginResponse {
    message: string;
    user_id: number;
}


export interface SearchUserResponse {
    items:       ItemSearchUserResponse[];
    limit:       number;
    page:        number;
    total_items: number;
    total_pages: number;
}

export interface ItemSearchUserResponse {
    dni:      string;
    email:    string;
    id:       number;
    lastname: string;
    name:     string;
    phone:    string;
    role:     string;
}
