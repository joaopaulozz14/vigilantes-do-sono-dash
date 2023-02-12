import {
	IChartDataParameters,
	IChartInputInfo,
	IChartOutputDatasets,
	ILineChartData,
	ILineChartOptions,
} from "@types";

export class ChartData {
	protected _data: IChartInputInfo[];
	protected _labels: string[];
	protected _title: string;
	protected _type: string;

	constructor(
		type: string,
		title: string,
		labels: string[],
		data: IChartInputInfo[],
	) {
		this._type = type;
		this._labels = labels;
		this._data = data;
		this._title = title;
	}

	private fillData(): IChartDataParameters[] {
		let newData: IChartDataParameters[];
		switch (this._type) {
			case "line":
				newData = this._data.map((e: IChartInputInfo) => {
					const res = {
						label: e.label,
						data: e.data,
						borderColor: e.colors[0],
						backgroundColor: e.colors[1],
					};
					return res;
				});
				return newData;

			case "multi":
				newData = [
					{
						type: "line" as const,
						label: this._data[0].label,
						borderColor: this._data[0].colors[0],
						borderWidth: this._data[0].borderWidth,
						fill: this._data[0].fill ? this._data[0].fill : false,
						data: this._data[0].data,
					},
					{
						type: "bar" as const,
						label: this._data[1].label,
						backgroundColor: this._data[1].colors[0],
						data: this._data[1].data,
						borderColor: this._data[1].colors[1],
						borderWidth: this._data[1].borderWidth,
					},
					{
						type: "bar" as const,
						label: this._data[2].label,
						backgroundColor: this._data[2].colors[0],
						data: this._data[2].data,
					},
				];
				return newData;

			default:
				newData = [
					{
						label: "error",
						data: [1, 2, 3],
					},
				];
				return newData;
		}
	}

	protected multiWrite(): IChartOutputDatasets {
		const datasets: IChartDataParameters[] = this.fillData();
		const data: IChartOutputDatasets = {
			labels: this._labels,
			datasets,
		};
		return data;
	}

	protected lineWrite(): ILineChartData {
		const data: IChartOutputDatasets = this.multiWrite();
		const options: ILineChartOptions = {
			responsive: true,
			plugins: {
				legend: {
					position: "top" as const,
				},
				title: {
					display: true,
					text: this._title,
				},
			},
		};
		return { data, options };
	}

	protected line(): ILineChartData {
		return this.lineWrite();
	}
	protected multi(): IChartOutputDatasets {
		return this.multiWrite();
	}
}
