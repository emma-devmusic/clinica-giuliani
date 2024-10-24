
// TRAE INFORMACIÓN DEL SESSION STORAGE
export const getFromSessionStorage = (id: string): string | null => sessionStorage.getItem(id)

// SETEA INFORMACIÓN EN EL SESSION STORAGE
export const setInSessionStorage = (id: string, data: any) => sessionStorage.setItem(id, JSON.stringify(data))

export const objToArray = (obj: any) => {
    let arr = []
    for (let prop in obj) arr.push(obj[prop])
    return arr
}

// TRANSFORMA UN DATO EN BASE64
export const base64ToBlob = (dataURI: string) => {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)
    return new Blob([ia], { type: mimeString })
}


// PRIMERA LETRA A MAYUSCULA
export const flu = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);





