/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSortDataChart, useSwichers } from "main";
import { ChartLine, MultiChart } from "presentation";
import { SCharts } from "presentation/styles/Components/AllCharts";
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
			{currentGeneralChart && switchGeneral && (
				<div>
					<MultiChart data={currentGeneralChart} />
				</div>
			)}
			{currentAnxietyChart && switchAnxiety && (
				<div>
					<ChartLine
						options={currentAnxietyChart.options}
						data={currentAnxietyChart.data}
					/>
				</div>
			)}
			{currentDepressionChart && switchDepression && (
				<div>
					<ChartLine
						options={currentDepressionChart.options}
						data={currentDepressionChart.data}
					/>
				</div>
			)}
			{currentInsomniaChart && switchInsomnia && (
				<div>
					<ChartLine
						options={currentInsomniaChart.options}
						data={currentInsomniaChart.data}
					/>
				</div>
			)}
			{currentProductivityChart && switchProductivity && (
				<div>
					<MultiChart data={currentProductivityChart} />
				</div>
			)}
			{currentRatingChart && switchRating && (
				<div>
					<MultiChart data={currentRatingChart} />
				</div>
			)}
		</SCharts>
	);
};
