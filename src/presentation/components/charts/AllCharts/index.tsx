import { ChartLine, MultiChart } from "presentation";
import { SCharts } from "./styles";

export const AllCharts = (): JSX.Element => {
	return (
		<SCharts>
			<ChartLine />
			<MultiChart />
		</SCharts>
	);
};
