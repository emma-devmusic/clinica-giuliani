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
    email:    string;
    id:       number;
    role:     string;
    username: string;
}
