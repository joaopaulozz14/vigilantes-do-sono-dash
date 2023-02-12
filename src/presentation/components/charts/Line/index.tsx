import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-module-boundary-types
export const ChartLine = ({ options, data }): JSX.Element => {
	return (
		<Line
			options={options}
			data={data}
		/>
	);
};
