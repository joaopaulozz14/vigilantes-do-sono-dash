import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { ChartProvider } from "./ChartsContext";
import { ChartSwitchersProvider } from "./ChartSwichers";
import { SortDataChartProvider } from "./SortDataChartsContext";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ChartSwitchersProvider>
					<ChartProvider>
						<SortDataChartProvider>
							{children}
						</SortDataChartProvider>
					</ChartProvider>
				</ChartSwitchersProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};
