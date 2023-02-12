import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
);

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-module-boundary-types
export const MultiChart = ({ data }): JSX.Element => {
	return (
		<Chart
			type="bar"
			data={data}
		/>
	);
};
