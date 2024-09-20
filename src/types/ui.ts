export interface ModalState {
    // isOpen: boolean;
    title: string;
    type: 'info' | 'error' | 'success' | 'waning';
    content: 'new_user' | 'new_asset';
}





export interface QueryObject {
    page: number,
    term: string
}
