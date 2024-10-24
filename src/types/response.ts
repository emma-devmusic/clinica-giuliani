export interface LoginResponse {
    message: string;
    user_id: number;
    role: 'admin' | 'employee';
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

export interface GetAssetsResponose {
    items:       ItemGetAssetsResponose[];
    limit:       number;
    page:        number;
    total_items: number;
    total_pages: number;
}

export interface ItemGetAssetsResponose {
    created_at:   string;
    document_url: string;
    id:           number;
    updated_at:   string;
    user_id:      number;
    asset_type: string;
    period: Date | string;
}

