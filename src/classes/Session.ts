
import { UserProfile } from "../types";
import EncryptData from "./EncryptData";

export default class Session {
    constructor() {
        this.saveUserSession = this.saveUserSession
        this.getUserSession = this.getUserSession.bind(this);
        this.getModuleById = this.getModuleById.bind(this);
        this.getData = this.getData.bind(this);
        this.getRole = this.getRole.bind(this);
        this.getPermissionsId = this.getPermissionsId.bind(this);
    }

    saveUserSession(user: UserProfile): void {
        const encryptedData = new EncryptData().encrypt( JSON.stringify(user) )
        sessionStorage.setItem('session-user-clinica', encryptedData)
    }

    getUserSession(): UserProfile | false{
        const userEncrypt = sessionStorage.getItem('session-user-clinica')
        return userEncrypt ? new EncryptData().decrypt(userEncrypt).data as UserProfile : false
    }
    getModuleById(id: number) {
        return 'Modules by Id ' + id
    }
    getData() {
        return 'Data User'
    }
    getRole() {
        const session = this.getUserSession()
        return session ? session.role : 'No hay session'
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