import { ItemSearchUserResponse } from "./response"


export interface UsersState {
    users: ItemSearchUserResponse[];
    userActive: ItemSearchUserResponse;
    usersSelected: number[];
}