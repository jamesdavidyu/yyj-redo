// TODO: install axios
import axios, { AxiosInstance } from "axios";

export const getYyjApiHttpClient = (accessToken?: string) => {
    const instance: AxiosInstance = axios.create({
        baseURL: process.env.YYJ_API_URL,
        timeout: 18000,
        headers: {
            ...(accessToken ? { Authorization: `${accessToken}`} : {}),
        },
    });
    const client = new YyjApiHttpClient(instance);

    return client
}

class YyjApiHttpClient {
    constructor(private client: AxiosInstance) {}

    // TODO: need to create java/mongodb or node/mongodb api
}