import {
	AllProvidersProps,
	AppState,
	ChartSwitchersProviderData,
} from "@types";
import { createContext, useContext, useState } from "react";

const ChartSwitchersContext = createContext<ChartSwitchersProviderData>(
	{} as ChartSwitchersProviderData,
);

export const ChartSwitchersProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const [switchAnxiety, setSwitchAnxiety] = useState<boolean>(false);
	const [switchDepression, setSwitchDepression] = useState<boolean>(false);
	const [switchGeneral, setSwitchGeneral] = useState<boolean>(false);
	const [switchInsomnia, setSwitchInsomnia] = useState<boolean>(false);
	const [switchProductivity, setSwitchProductivity] =
		useState<boolean>(false);
	const [switchRating, setSwitchRating] = useState<boolean>(false);
	const [arrayCharts, setArrayCharts] = useState<AppState>({ items: [] });

	return (
		<ChartSwitchersContext.Provider
			value={{
				switchAnxiety,
				switchDepression,
				switchGeneral,
				switchInsomnia,
				switchProductivity,
				switchRating,
				arrayCharts,
				setSwitchAnxiety,
				setSwitchDepression,
				setSwitchGeneral,
				setSwitchInsomnia,
				setSwitchProductivity,
				setSwitchRating,
				setArrayCharts,
			}}
		>
			{children}
		</ChartSwitchersContext.Provider>
	);
};

export const useSwichers = (): ChartSwitchersProviderData =>
	useContext(ChartSwitchersContext);
