import { IChartData, IChartOutputDatasets, ILineChartData } from "@types";
import {
	GeneralChart,
	useChart,
	useSwichers,
	DefaultChart,
	ProductivityChart,
	RatingChart,
	useColors,
} from "main";

import { AllProvidersProps, SortDataChartProviderData } from "@types";
import { createContext, useContext, useEffect, useState } from "react";

const SortDataChartContext = createContext<SortDataChartProviderData>(
	{} as SortDataChartProviderData,
);

export const SortDataChartProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const {
		anxiety,
		depression,
		general,
		generalMedia,
		lastGeneral,
		insomnia,
		productivity,
		rating,
		refreshData,
	} = useChart();

	const {
		switchAnxiety,
		switchDepression,
		switchGeneral,
		switchInsomnia,
		switchProductivity,
		switchRating,
	} = useSwichers();

	const {
		chartLineBGColor,
		chartLineBorderColor,
		chartBarBGPrimaryColor,
		chartBarBorderPrimaryColor,
		chartBarBGSecondaryColor,
		chartBarBorderSecondaryColor,
	} = useColors();

	const [currentGeneralChart, setCurrentGeneralChart] =
		useState<IChartOutputDatasets>({});
	const [currentAnxietyChart, setCurrentAnxietyChart] =
		useState<ILineChartData>({});
	const [currentDepressionChart, setCurrentDepressionChart] =
		useState<ILineChartData>({});
	const [currentInsomniaChart, setCurrentInsomniaChart] =
		useState<ILineChartData>({});
	const [currentProductivityChart, setCurrentProductivityChart] =
		useState<IChartOutputDatasets>({});
	const [currentRatingChart, setCurrentRatingChart] =
		useState<IChartOutputDatasets>({});

	// General
	const initGeneral = (): void => {
		const generalChart: IChartOutputDatasets = new GeneralChart(
			general,
			generalMedia,
			lastGeneral,
			[
				chartLineBorderColor,
				chartBarBorderSecondaryColor,
				chartBarBGSecondaryColor,
				chartBarBGPrimaryColor,
			],
		).create;
		setCurrentGeneralChart(generalChart);
	};
	useEffect(() => {
		refreshData();
		initGeneral();
	}, [switchGeneral]);

	const builderDefault = (data: IChartData): ILineChartData =>
		new DefaultChart(data, [chartLineBorderColor, chartLineBGColor]).create;

	// Anxiety
	const initAnxiety = (): void => {
		const anxietyChart: ILineChartData = builderDefault(anxiety);
		setCurrentAnxietyChart(anxietyChart);
	};
	useEffect(() => {
		refreshData();
		initAnxiety();
	}, [switchAnxiety]);

	// Depression
	const initDepression = (): void => {
		const depressionChart: ILineChartData = builderDefault(depression);
		setCurrentDepressionChart(depressionChart);
	};
	useEffect(() => {
		refreshData();
		initDepression();
	}, [switchDepression]);

	// Insomnia
	const initInsomnia = (): void => {
		const insomniaChart: ILineChartData = builderDefault(insomnia);
		setCurrentInsomniaChart(insomniaChart);
	};
	useEffect(() => {
		refreshData();
		initInsomnia();
	}, [switchInsomnia]);

	// Productivity
	const initProductivity = (): void => {
		const productivityChart: IChartOutputDatasets = new ProductivityChart(
			productivity,
			[
				chartBarBorderPrimaryColor,
				chartBarBGPrimaryColor,
				chartBarBGSecondaryColor,
			],
		).create;
		setCurrentProductivityChart(productivityChart);
	};
	useEffect(() => {
		refreshData();
		initProductivity();
	}, [switchProductivity]);

	// Rating
	const initRating = (): void => {
		const ratingChart: IChartOutputDatasets = new RatingChart(rating, [
			chartBarBorderPrimaryColor,
			chartBarBGPrimaryColor,
		]).create;
		setCurrentRatingChart(ratingChart);
	};
	useEffect(() => {
		refreshData();
		initRating();
	}, [switchRating]);

	useEffect(() => {
		refreshData();
	}, []);

	return (
		<SortDataChartContext.Provider
			value={{
				currentGeneralChart,
				currentAnxietyChart,
				currentInsomniaChart,
				currentDepressionChart,
				currentProductivityChart,
				currentRatingChart,
			}}
		>
			{children}
		</SortDataChartContext.Provider>
	);
};

export const useSortDataChart = (): SortDataChartProviderData =>
	useContext(SortDataChartContext);
