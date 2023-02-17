import { AllProvidersProps, SettingsProviderData } from "@types";
import { createContext, useContext, useState } from "react";

const SettingsContext = createContext<SettingsProviderData>(
	{} as SettingsProviderData,
);

export const SettingsProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const [isActive, setIsActive] = useState("profile");

	return (
		<SettingsContext.Provider value={{ isActive, setIsActive }}>
			{children}
		</SettingsContext.Provider>
	);
};

export const useSettings = (): SettingsProviderData =>
	useContext(SettingsContext);
