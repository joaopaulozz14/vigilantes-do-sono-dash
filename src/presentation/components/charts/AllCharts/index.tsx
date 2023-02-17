import { useColors, useSortDataChart, useSwichers } from "main";
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
		setSwitchAnxiety,
		setSwitchDepression,
		setSwitchGeneral,
		setSwitchInsomnia,
		setSwitchProductivity,
		setSwitchRating,
	} = useSwichers();

	const { primaryColor, secondaryBGColor } = useColors();
	return (
		<SCharts>
			{currentGeneralChart && switchGeneral && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					{/*tentar construir esse título para as divs*/}
					<SHeaderCharts>
						<h2>Dados do App</h2>

						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									return setSwitchGeneral(!switchGeneral);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<MultiChart data={currentGeneralChart} />
				</SChartsContent>
			)}
			{currentAnxietyChart && switchAnxiety && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					<SHeaderCharts>
						<h2></h2>
						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									setSwitchAnxiety(!switchAnxiety);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<ChartLine
						options={currentAnxietyChart.options}
						data={currentAnxietyChart.data}
					/>
				</SChartsContent>
			)}
			{currentDepressionChart && switchDepression && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					<SHeaderCharts>
						<h2></h2>
						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									setSwitchDepression(!switchDepression);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<ChartLine
						options={currentDepressionChart.options}
						data={currentDepressionChart.data}
					/>
				</SChartsContent>
			)}
			{currentInsomniaChart && switchInsomnia && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					<SHeaderCharts>
						<h2></h2>
						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									setSwitchInsomnia(!switchInsomnia);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<ChartLine
						options={currentInsomniaChart.options}
						data={currentInsomniaChart.data}
					/>
				</SChartsContent>
			)}
			{currentProductivityChart && switchProductivity && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					<SHeaderCharts>
						<h2></h2>
						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									setSwitchProductivity(!switchProductivity);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<MultiChart data={currentProductivityChart} />
				</SChartsContent>
			)}
			{currentRatingChart && switchRating && (
				<SChartsContent
					primaryColor={primaryColor}
					backgroundColor={secondaryBGColor}
				>
					<SHeaderCharts>
						<h2>Avaliações</h2>
						<div>
							<button>PDF</button>
							<button
								onClick={(): void => {
									setSwitchRating(!switchRating);
								}}
							>
								X
							</button>
						</div>
					</SHeaderCharts>
					<MultiChart data={currentRatingChart} />
				</SChartsContent>
			)}
		</SCharts>
	);
};
