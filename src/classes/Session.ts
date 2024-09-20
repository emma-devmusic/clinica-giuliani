import Swal from "sweetalert2";
import { UserProfile, UsersState } from "../types";
import EncryptData from "./EncryptData";

export default class Session {
    constructor() {
        this.saveUserSession = this.saveUserSession
        this.getUserSession = this.getUserSession.bind(this);
        this.getModuleById = this.getModuleById.bind(this);
        this.getData = this.getData.bind(this);
        this.getRoleId = this.getRoleId.bind(this);
        this.getPermissionsId = this.getPermissionsId.bind(this);
    }

    saveUserSession(user: UserProfile): void {
        const encryptedData = new EncryptData().encrypt( JSON.stringify(user) )
        sessionStorage.setItem('session-user-clinica', encryptedData)
    }

    getUserSession() {
        const userEncrypt = sessionStorage.getItem('session-user-clinica')
        if(userEncrypt){
            return new EncryptData().decrypt(userEncrypt).data as UserProfile
        } else {
            Swal.fire('Error', 'No existe session guardada', 'error')
            setTimeout(() => {
                location.replace('/login')
            }, 3000);
        }
    }
    getModuleById(id: number) {
        return 'Modules by Id'
    }
    getData() {
        return 'Data User'
    }
    getRoleId() {
        return 'Role'
    }
    getPermissionsId() {
        return 'Permission Id'
    }
    getAccessToken() {
        return 'Access Token'
    }
    deleteSession() {
        sessionStorage.clear()
    }
}