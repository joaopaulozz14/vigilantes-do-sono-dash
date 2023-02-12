import { IChartData, IRatingData, IEmployee, IGeneral } from "@types";

export const employee: IEmployee = {
	name: "user",
	password: "User*123",
	email: "user@mail.com",
};

export const isi: IChartData = {
	name: "Insonia",
	improvement: 10,
	values: [17, 10.7, 6.5],
};

export const gad: IChartData = {
	name: "Ansiedade",
	improvement: 10,
	values: [4.2, 3.3, 1.8],
};

export const phq: IChartData = {
	name: "Depressão",
	improvement: 10,
	values: [4.6, 3.18, 1.89],
};

export const prod: IChartData = {
	name: "Produtividade",
	improvement: 10,
	values: [7.8, 3.4],
};

export const generalData: IGeneral = {
	currentSessions: 3168,
	reportedNights: 8692,
	appliedTechniques: 3678,
};
export const lastGeneralData: IGeneral = {
	currentSessions: 3075,
	reportedNights: 7648,
	appliedTechniques: 3509,
};

export const ratingData: IRatingData = {
	allRatings: [165, 235, 486, 728, 638],
	ratingMedia: 4.61,
};
