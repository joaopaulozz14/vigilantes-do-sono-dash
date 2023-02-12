import { IChartInputInfo, IChartOutputDatasets } from "@types";
import { GeneralChart, useChart, useSwichers } from "main";
import { AllProvidersProps, SortDataChartProviderData } from "@types";
import { createContext, useContext, useEffect, useState } from "react";

const SortDataChartContext = createContext<SortDataChartProviderData>(
	{} as SortDataChartProviderData,
);

export const SortDataChartProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const {
		// anxiety,
		// depression,
		general,
		generalMedia,
		lastGeneral,
		// insomnia,
		// productivity,
		// rating,
		refreshData,
	} = useChart();

	const {
		// switchAnxiety,
		// switchDepression,
		switchGeneral,
		// switchInsomnia,
		// switchProductivity,
		// switchRating,
	} = useSwichers();

	// const lineData: IChartInputInfo[] = [
	// 	{
	// 		label: "teste label",
	// 		data: [19, 3, 21],
	// 		colors: ["#190321", "#c4a323"],
	// 	},
	// ];

	const [currentGeneralChart, setcurrentGeneralChart] =
		useState<IChartOutputDatasets>();

	const labels = [
		"Total de sessões atuais",
		"Técnicas aplicadas",
		"Noites Reportadas",
	];

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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
	const initGeneral = () => {
		refreshData();
		const teste2 = new GeneralChart(labels, multiData);
		// const view1: ILineChartData = teste.line();
		const generalChart: IChartOutputDatasets = teste2.create;
		console.log("Dados do gráfico:");
		console.log(generalChart);
		setcurrentGeneralChart(generalChart);
	};

	useEffect(() => {
		refreshData();
		initGeneral();
	}, []);
	useEffect(() => {
		refreshData();
		initGeneral();
	}, [switchGeneral]);

	// const teste = new ChartData("line", "teste line", labels, lineData);

	return (
		<SortDataChartContext.Provider
			value={{
				currentGeneralChart,
			}}
		>
			{children}
		</SortDataChartContext.Provider>
	);
};
export const useSortDataChart = (): SortDataChartProviderData =>
	useContext(SortDataChartContext);
