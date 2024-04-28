import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchProps<T> {
	count: number;
	results: T[];
}

export default function useData<T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	dep?: any[]
) {
	const [data, setData] = useState<T[]>([]);
	const [errors, setErrors] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();
			setLoading(true);
			apiClient
				.get<FetchProps<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setErrors(err.message);
					setLoading(false);
				});
			return () => controller.abort();
		},
		dep ? [...dep] : []
	);
	return { data, errors, setErrors, setData, isLoading };
}
