/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSortDataChart, useSwichers } from "main";
import { ChartLine, MultiChart } from "presentation";
import { SCharts } from "presentation/styles/Components/AllCharts";
import { useState } from "react";

export const AllCharts = (): JSX.Element => {
	const { currentGeneralChart } = useSortDataChart();
	const { switchGeneral } = useSwichers();
	return (
		<SCharts>
			<div>
				{/* <ChartLine
					options={view1.options}
					data={view1.data}
				/> */}
			</div>
			<div>
				{currentGeneralChart && switchGeneral && (
					<MultiChart data={currentGeneralChart} />
				)}
			</div>
		</SCharts>
	);
};
