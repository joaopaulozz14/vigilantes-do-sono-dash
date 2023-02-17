import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { ChartProvider } from "./ChartsContext";
import { ChartSwitchersProvider } from "./ChartSwichers";
import { ColorsProvider } from "./ColorsContext";
import { SettingsProvider } from "./SettingsContext";
import { SortDataChartProvider } from "./SortDataChartsContext";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<SettingsProvider>
					<ColorsProvider>
						<ChartSwitchersProvider>
							<ChartProvider>
								<SortDataChartProvider>
									{children}
								</SortDataChartProvider>
							</ChartProvider>
						</ChartSwitchersProvider>
					</ColorsProvider>
				</SettingsProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};
