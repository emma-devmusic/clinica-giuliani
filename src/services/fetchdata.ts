import axios from "axios"

export const fetchData = async ( method: string, url:string, data: object | null) => {

    const axiosInstance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                'credentials': 'include'
            },
            baseURL: import.meta.env.VITE_API_BASE_URL
    })
    
    const response = await axiosInstance({
        method,
        url: url,
        ...( data && {data} )
    })
    
    return response
}


