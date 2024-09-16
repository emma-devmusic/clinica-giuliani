

export default class DecryptedSession {
    constructor() {
        this.sessionDecrypted = this.sessionDecrypted
        this.getArrayPermissions = this.getArrayPermissions.bind(this);
        this.getModuleById = this.getModuleById.bind(this);
        this.getData = this.getData.bind(this);
        this.getRoleId = this.getRoleId.bind(this);
        this.getPermissionsId = this.getPermissionsId.bind(this);
    }

    sessionDecrypted() {
        return 'Session Decrypted'
    }
    getArrayPermissions() {
        return 'Permissions'
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
}





