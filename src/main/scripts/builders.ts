import {
	IChartData,
	IChartInputInfo,
	IChartOutputDatasets,
	IGeneral,
	ILineChartData,
	IRatingData,
} from "@types";
import { ChartData } from "./engine";

export class GeneralChart extends ChartData {
	constructor(
		general: IGeneral,
		generalMedia: IGeneral,
		lastGeneral: IGeneral,
	) {
		const multiData: IChartInputInfo[] = [
			{
				label: "Media",
				colors: ["#b651db", "#7ef8ad"],
				borderWidth: 2,
				data: [
					generalMedia.currentSessions,
					generalMedia.appliedTechniques,
					generalMedia.reportedNights,
				],
			},
			{
				label: "Dados anteriores",
				colors: ["#060314", "#e9eeca"],
				data: [
					lastGeneral.currentSessions,
					lastGeneral.appliedTechniques,
					lastGeneral.reportedNights,
				],
				borderWidth: 3,
			},
			{
				label: "Dados atuais",
				colors: ["#08c6df"],
				data: [
					general.currentSessions,
					general.appliedTechniques,
					general.reportedNights,
				],
			},
		];

		super(
			"multi",
			"Dados Gerais",
			[
				"Total de sessões atuais",
				"Técnicas aplicadas",
				"Noites Reportadas",
			],
			multiData,
		);
	}
	public get create(): IChartOutputDatasets {
		return this.multiWrite();
	}
}
export class ProductivityChart extends ChartData {
	constructor(prod: IChartData) {
		const multiData: IChartInputInfo[] = [
			{
				label: "",
				colors: ["#b651db00", "#7ef8ad00"],
				data: [0, 0, 0],
			},
			{
				label: prod.name,
				colors: ["#a6b314", "#e9aeca"],
				data: prod.values,
				borderWidth: 2,
			},
			{
				label: "",
				colors: ["#08c6df00"],
				data: [0, 0, 0],
			},
		];

		super(
			"multi",
			"Produtividade",
			["Primeira Avaliação", "Segunda Avaliação"],
			multiData,
		);
	}
	public get create(): IChartOutputDatasets {
		return this.multiWrite();
	}
}

export class RatingChart extends ChartData {
	constructor(rating: IRatingData) {
		const multiData: IChartInputInfo[] = [
			{
				label: "Avaliações",
				colors: ["#060314", "#e9eeca"],
				data: rating.allRatings,
				borderWidth: 3,
			},
		];

		super("rating", "Avaliações", ["Avaliações"], multiData);
	}
	public get create(): IChartOutputDatasets {
		return this.multiWrite();
	}
}

export class DefaultChart extends ChartData {
	constructor(data: IChartData) {
		const multiData: IChartInputInfo[] = [
			{
				label: data.name,
				data: data.values,
				colors: ["#190321", "#434343"],
			},
		];

		super(
			"line",
			data.name,
			["Primeira avaliação", "Segunda avaliação", "Terceira avaliação"],
			multiData,
		);
	}
	public get create(): ILineChartData {
		return this.lineWrite();
	}
}
