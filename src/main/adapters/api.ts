import axios from "axios";

export const api = axios.create({
	baseURL: "https://kerannayume.onrender.com",
});
export class Api {
	private baseUrl = "https://kerannayume.onrender.com";
	public api = axios.create({
		baseURL: this.baseUrl,
	});
}
