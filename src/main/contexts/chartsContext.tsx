import { AllProvidersProps, ChartProviderData, IChartData } from "@types";
import { createContext, useCallback, useContext, useState } from "react";
import { api } from "main/adapters";

const ChartContext = createContext<ChartProviderData>({} as ChartProviderData);

export const ChartProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const [insomnia, setInsomnia] = useState<IChartData | null>(null);
	const [depression, setDepression] = useState<IChartData | null>(null);
	const [anxiety, setAnxiety] = useState<IChartData | null>(null);
	const [productivity, setProductivity] = useState<IChartData | null>(null);

	const [refresh, setRefresh] = useState<number>(60);

	const setRefreshTime = useCallback((): void => {
		localStorage.setItem("refresh", refresh.toString());
	}, [refresh]);

	const refreshData = (): string | void => {
		api.get("/chart")
			.then(res => {
				console.log(res);
				return "teste";
			})
			.catch(err => console.log("cannot get " + err));
	};

	return (
		<ChartContext.Provider
			value={{
				insomnia,
				setInsomnia,
				depression,
				setDepression,
				anxiety,
				setAnxiety,
				productivity,
				setProductivity,
				refresh,
				setRefresh,
				refreshData,
				setRefreshTime,
			}}
		>
			{children}
		</ChartContext.Provider>
	);
};

export const useChart = (): ChartProviderData => useContext(ChartContext);
