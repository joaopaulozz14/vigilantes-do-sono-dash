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
			<div>
				{currentGeneralChart && switchGeneral && (
					<MultiChart data={currentGeneralChart} />
				)}
			</div>
			<div>
				{currentAnxietyChart && switchAnxiety && (
					<ChartLine
						options={currentAnxietyChart.options}
						data={currentAnxietyChart.data}
					/>
				)}
			</div>
			<div>
				{currentDepressionChart && switchDepression && (
					<ChartLine
						options={currentDepressionChart.options}
						data={currentDepressionChart.data}
					/>
				)}
			</div>
			<div>
				{currentInsomniaChart && switchInsomnia && (
					<ChartLine
						options={currentInsomniaChart.options}
						data={currentInsomniaChart.data}
					/>
				)}
			</div>
			<div>
				{currentProductivityChart && switchProductivity && (
					<MultiChart data={currentProductivityChart} />
				)}
			</div>
			<div>
				{currentRatingChart && switchRating && (
					<MultiChart data={currentRatingChart} />
				)}
			</div>
		</SCharts>
	);
};
