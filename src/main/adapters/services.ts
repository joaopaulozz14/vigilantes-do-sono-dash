import { Auth, IChartData, IEmployee, IGeneral, IRatingData } from "@types";
import { Api } from "./api";

export class ChartServices extends Api {
	public insomnia = (): Promise<void | IChartData> =>
		this.api
			.get("/insomnia")
			.then((res): IChartData => res.data)
			.catch(res => {
				console.log(res);
			});
	public depression = (): Promise<void | IChartData> =>
		this.api
			.get("/depression")
			.then((res): IChartData => res.data)
			.catch(res => {
				console.log(res);
			});
	public anxiety = (): Promise<void | IChartData> =>
		this.api
			.get("/anxiety")
			.then((res): IChartData => res.data)
			.catch(res => {
				console.log(res);
			});
	public productivity = (): Promise<void | IChartData> =>
		this.api
			.get("/productivity")
			.then((res): IChartData => res.data)
			.catch(res => {
				console.log(res);
			});
	public rating = (): Promise<void | IRatingData> =>
		this.api
			.get("/rating")
			.then((res): IRatingData => res.data)
			.catch(res => {
				console.log(res);
			});
	public general = (): Promise<void | IGeneral> =>
		this.api
			.get("/general")
			.then((res): IGeneral => res.data)
			.catch(res => {
				console.log(res);
			});
}

export class UserServices extends Api {
	public login = (data: IEmployee): Promise<void | Auth> =>
		this.api
			.post("/auth/login", data)
			.then((res): Auth => res.data)
			.catch(res => {
				console.log(res);
			});
	public Register = (data: IEmployee): Promise<void | Auth> =>
		this.api
			.post("/user", data)
			.then((res): Auth => res.data)
			.catch(res => {
				console.log(res);
			});
}
