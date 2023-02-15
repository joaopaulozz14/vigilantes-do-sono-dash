import { useSortDataChart, useSwichers } from "main";
import { ChartLine, MultiChart } from "presentation";
import {
	SCharts,
	SChartsContent,
	SHeaderCharts,
} from "presentation/styles/Components/AllCharts";

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
				<SChartsContent>
					<SHeaderCharts>
						<h2>TÃ­tulo</h2>
						<button>PDF</button>
						<button>X</button>
					</SHeaderCharts>
					<MultiChart data={currentGeneralChart} />
				</SChartsContent>
			)}
			{currentAnxietyChart && switchAnxiety && (
				<SChartsContent>
					<ChartLine
						options={currentAnxietyChart.options}
						data={currentAnxietyChart.data}
					/>
				</SChartsContent>
			)}
			{currentDepressionChart && switchDepression && (
				<SChartsContent>
					<ChartLine
						options={currentDepressionChart.options}
						data={currentDepressionChart.data}
					/>
				</SChartsContent>
			)}
			{currentInsomniaChart && switchInsomnia && (
				<SChartsContent>
					<ChartLine
						options={currentInsomniaChart.options}
						data={currentInsomniaChart.data}
					/>
				</SChartsContent>
			)}
			{currentProductivityChart && switchProductivity && (
				<SChartsContent>
					<MultiChart data={currentProductivityChart} />
				</SChartsContent>
			)}
			{currentRatingChart && switchRating && (
				<SChartsContent>
					<MultiChart data={currentRatingChart} />
				</SChartsContent>
			)}
		</SCharts>
	);
};
