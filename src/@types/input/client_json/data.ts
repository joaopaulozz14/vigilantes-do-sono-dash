export interface IChartData {
	name: string;
	improvement: number;
	values: number[];
}

export interface IRatingData {
	allRatings: number[];
	ratingMedia: number;
}

export interface IGeneral {
	currentSessions: number;
	reportedNights: number;
	appliedTechniques: number;
}
