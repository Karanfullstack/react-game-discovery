// 26f72f865f6a46c28de40441604e2b3e
import axios from "axios";

export default axios.create({
	baseURL: "/api",
	params: {
		key: import.meta.env.VITE_KEY_API,
	},
});
