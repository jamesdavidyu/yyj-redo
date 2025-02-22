// TODO: install axios
import axios, { AxiosInstance } from "axios";

interface RegisterPayload {
    username: string;
    password: string;
}

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

    public async registerUser(payload: RegisterPayload) {
        const response = await this.client
            .post("/api/v1/register", payload)
            .catch((e) => {
                throw new Error(e);
            })
        
        return response;
    }
}