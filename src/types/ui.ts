export interface ModalState {
    // isOpen: boolean;
    title: string;
    type: 'info' | 'error' | 'success' | 'waning';
    content: 'new_user' | 'new_asset' | 'update_user';
}





export interface QueryObject {
    page: number,
    term: string
}
