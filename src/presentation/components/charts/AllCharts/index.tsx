/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSortDataChart, useSwichers } from "main";
import { ChartLine, MultiChart } from "presentation";
import {
	SCharts,
	SChartsContent,
} from "presentation/styles/Components/AllCharts";
import { useState } from "react";

export const AllCharts = (): JSX.Element => {
	const {
		currentGeneralChart,
		currentAnxietyChart,
		currentInsomniaChart,
		currentDepressionChart,
		currentProductivityChart,
		currentRatingChart,
	} = useSortDataChart();
	const {
		switchAnxiety,
		switchDepression,
		switchGeneral,
		switchInsomnia,
		switchProductivity,
		switchRating,
	} = useSwichers();
	return (
		<SCharts>
			<SChartsContent>
				{currentGeneralChart && switchGeneral && (
					<MultiChart data={currentGeneralChart} />
				)}
			</SChartsContent>
			<SChartsContent>
				{currentAnxietyChart && switchAnxiety && (
					<ChartLine
						options={currentAnxietyChart.options}
						data={currentAnxietyChart.data}
					/>
				)}
			</SChartsContent>
			<SChartsContent>
				{currentDepressionChart && switchDepression && (
					<ChartLine
						options={currentDepressionChart.options}
						data={currentDepressionChart.data}
					/>
				)}
			</SChartsContent>
			<SChartsContent>
				{currentInsomniaChart && switchInsomnia && (
					<ChartLine
						options={currentInsomniaChart.options}
						data={currentInsomniaChart.data}
					/>
				)}
			</SChartsContent>
			<SChartsContent>
				{currentProductivityChart && switchProductivity && (
					<MultiChart data={currentProductivityChart} />
				)}
			</SChartsContent>
			<SChartsContent>
				{currentRatingChart && switchRating && (
					<MultiChart data={currentRatingChart} />
				)}
			</SChartsContent>
		</SCharts>
	);
};
