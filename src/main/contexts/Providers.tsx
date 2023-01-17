import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>{children}</AuthProvider>
		</BrowserRouter>
	);
};
