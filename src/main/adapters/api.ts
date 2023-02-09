import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3333/",
});
export class Api {
	private baseUrl = process.env.DATABASE_URL;
	public api = axios.create({
		baseURL: this.baseUrl,
	});
}
