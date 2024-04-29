import { AxiosRequestConfig } from "axios";
import axios from "axios";

export interface FetchProps<T> {
	count: number;
	next: string;
	results: T[];
}
export const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: import.meta.env.VITE_KEY_API,
	},
});

export class Service<T> {
	constructor(readonly endpoint: string) {}
	getAll = (config: AxiosRequestConfig) => {
		return apiClient
			.get<FetchProps<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default Service;
