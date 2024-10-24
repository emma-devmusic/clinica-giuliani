import { GetAssetsResponose, ItemSearchUserResponse } from "./response"


export interface UsersState {
    users: ItemSearchUserResponse[];
    pagination: UserPagination,
    userActive: ItemSearchUserResponse;
    usersSelected: number[];
}

export interface UserPagination {
    limit: number,
    page: number,
    total_items: number,
    total_pages: number,
}


export interface UserProfile {
    dni:      string;
    email:    string;
    id:       number;
    lastname: string;
    name:     string;
    phone:    string;
    role:     string;
}


export interface AssetState {
    assets: GetAssetsResponose;
    assetsSelected: number[];
}

