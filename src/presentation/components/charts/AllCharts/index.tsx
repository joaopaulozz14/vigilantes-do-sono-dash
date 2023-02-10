import { ChartLine, MultiChart } from "presentation";
import { SCharts } from "presentation/styles/Components/AllCharts";

export const AllCharts = (): JSX.Element => {
	return (
		<SCharts>
			<div>
				<ChartLine />
			</div>
			<div>
				<MultiChart />
			</div>
			<div>
				<ChartLine />
			</div>
			<div>
				<MultiChart />
			</div>
			<div>
				<MultiChart />
			</div>
			<div>
				<ChartLine />
			</div>
		</SCharts>
	);
};
