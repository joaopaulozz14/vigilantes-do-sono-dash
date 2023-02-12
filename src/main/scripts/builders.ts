import { IChartInputInfo, IChartOutputDatasets } from "@types";
import { ChartData } from "./engine";

export class GeneralChart extends ChartData {
	constructor(labels: string[], multiData: IChartInputInfo[]) {
		super("multi", "Dados Gerais", labels, multiData);
	}
	public get create(): IChartOutputDatasets {
		return this.multiWrite();
	}
}
