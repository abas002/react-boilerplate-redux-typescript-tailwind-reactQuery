import { toast } from "react-toastify";

export default function setupAxios(axios: any, store: any) {
	axios.defaults.baseURL = process.env.REACT_APP_API_URL;
	axios.interceptors.request.use(
		(config: any) => {
			config.headers.put["Content-Type"] = "application/json";
			/* const {
				auth: { accessToken },
			} = store.getState();
			if (accessToken) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			} */
			return config;
		},
		(err: any) => Promise.reject(err)
	);

	axios.interceptors.response.use(
		(response: any) => {
			if (response.status === 200) return response.data;
			return response;
		},
		(error: any) => {
			// setTimeout(() => {}, 1000)

			if (!error.response) {
				toast.error("ارتباط با سرور برقرار نشد!");
				return Promise.reject(error.response);
			}
			const { data }: any = error.response;
			console.log(data);

			const Error = data.Error ? data.Error : data.title;
			data.Error = Error;
			return Promise.reject(data.Error);
		}
	);
}
