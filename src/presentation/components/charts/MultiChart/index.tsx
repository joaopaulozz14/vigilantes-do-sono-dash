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

const labels = ["Primeiro", "Segundo", "Terceiro"];

const data = {
	labels,
	datasets: [
		{
			type: "line" as const,
			label: "Primeiro dado",
			borderColor: "rgb(255, 99, 132)",
			borderWidth: 2,
			fill: false,
			data: [12, 15, 14],
		},
		{
			type: "bar" as const,
			label: "Segundo Dado",
			backgroundColor: "rgb(75, 192, 192)",
			data: [13, 15, 11],
			borderColor: "#4e1d77",
			borderWidth: 2,
		},
		{
			type: "bar" as const,
			label: "terceiro dado",
			backgroundColor: "rgb(53, 162, 235)",
			data: [11, 15, 17],
		},
	],
};

export const MultiChart = (): JSX.Element => {
	return (
		<Chart
			type="bar"
			data={data}
		/>
	);
};
