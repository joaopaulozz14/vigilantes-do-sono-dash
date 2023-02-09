import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { ChartProvider } from "./chartsContext";
interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ChartProvider>{children}</ChartProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};
