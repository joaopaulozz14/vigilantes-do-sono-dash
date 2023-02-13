export interface IChartDataParameters {
	type?: string;
	label: string;
	data: number[];
	backgroundColor?: string;
	borderColor?: string;
	borderWidth?: number;
	fill?: boolean;
}
export interface IChartInputInfo {
	label: string;
	colors: string | string[];
	borderWidth?: number;
	fill?: boolean;
	data: number[];
}
export interface IChartOutputDatasets {
	labels?: string[];
	datasets?: IChartDataParameters[];
}
export interface ILineChartData {
	data?: IChartOutputDatasets;

	options?: ILineChartOptions;
}
export interface ILineChartOptions {
	responsive: boolean;
	plugins: {
		legend: {
			position: string;
		};
		title: {
			display: boolean;
			text: string;
		};
	};
}
