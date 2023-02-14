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
		colors: string[],
	) {
		const multiData: IChartInputInfo[] = [
			{
				label: "Media",
				colors: [colors[0]],
				borderWidth: 2,
				data: [
					generalMedia.currentSessions,
					generalMedia.appliedTechniques,
					generalMedia.reportedNights,
				],
			},
			{
				label: "Dados anteriores",
				colors: [colors[1], colors[2]],
				data: [
					lastGeneral.currentSessions,
					lastGeneral.appliedTechniques,
					lastGeneral.reportedNights,
				],
				borderWidth: 3,
			},
			{
				label: "Dados atuais",
				colors: [colors[3]],
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
	constructor(prod: IChartData, colors: string[]) {
		const multiData: IChartInputInfo[] = [
			{
				label: "",
				colors: ["#00000000"],
				data: [0, 0, 0],
			},
			{
				label: prod.name,
				colors: [colors[0], colors[1]],
				data: prod.values,
				borderWidth: 2,
			},
			{
				label: "",
				colors: ["#00000000"],
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
	constructor(rating: IRatingData, colors: string[]) {
		const multiData: IChartInputInfo[] = [
			{
				label: "Avaliações",
				colors: [colors[0], colors[1]],
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
	constructor(data: IChartData, colors: string[]) {
		const multiData: IChartInputInfo[] = [
			{
				label: data.name,
				data: data.values,
				colors: [colors[0], colors[1]],
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
