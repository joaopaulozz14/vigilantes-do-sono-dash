import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { ChartProvider } from "./ChartsContext";
import { ChartSwitchersProvider } from "./ChartSwichers";
import { ColorsProvider } from "./ColorsContext";
import { SortDataChartProvider } from "./SortDataChartsContext";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ColorsProvider>
					<ChartSwitchersProvider>
						<ChartProvider>
							<SortDataChartProvider>
								{children}
							</SortDataChartProvider>
						</ChartProvider>
					</ChartSwitchersProvider>
				</ColorsProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};
