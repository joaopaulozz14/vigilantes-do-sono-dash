import {
	AllProvidersProps,
	ChartProviderData,
	IChartData,
	IGeneral,
	IRatingData,
} from "@types";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { /*ChartServices,*/ gad, isi, phq, prod, Timer } from "main";
import { useAuth } from "./AccountContext";

const ChartContext = createContext<ChartProviderData>({} as ChartProviderData);

export const ChartProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();

	const [anxiety, setAnxiety] = useState<IChartData | null>(null);
	const [depression, setDepression] = useState<IChartData | null>(null);
	const [general, setGeneral] = useState<IGeneral | null>(null);
	const [insomnia, setInsomnia] = useState<IChartData | null>(null);
	const [productivity, setProductivity] = useState<IChartData | null>(null);
	const [rating, setRating] = useState<IRatingData | null>(null);

	const [refresh, setRefresh] = useState<number>(60);
	const [gottaRefresh, setGottaRefresh] = useState<number | null>(null);
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

	const getRefreshTime = (): void => {
		const refreshSetting = localStorage.getItem("refresh");
		if (refreshSetting) {
			setRefresh(Number(refreshSetting));
		}
	};

	const setRefreshTime = useCallback((): void => {
		localStorage.setItem("refresh", refresh.toString());
	}, [refresh]);

	const refreshingTime = async (): Promise<void> => {
		setInterval(() => {
			if (gottaRefresh && Date.now() >= gottaRefresh) {
				setIsRefreshing(!isRefreshing);
			}
		}, 1000);
	};

	const refreshData = async (): Promise<void> => {
		//Dados em memória
		setAnxiety(isi);
		setDepression(gad);
		setGeneral(general);
		setInsomnia(phq);
		setProductivity(prod);

		// Dados da API
		// const charts = new ChartServices();
		// const currentAnxiety = await charts.anxiety();
		// const currentDepression = await charts.depression();
		// const currentGeneral = await charts.general();
		// const currentInsomnia = await charts.insomnia();
		// const currentProductivity = await charts.productivity();
		// const currentRating = await charts.rating();

		// setAnxiety(currentAnxiety);
		// setDepression(currentDepression);
		// setGeneral(currentGeneral);
		// setInsomnia(currentInsomnia);
		// setProductivity(currentProductivity);
		// setRating(currentRating);

		const realoadTime = Timer.soon(refresh);
		setGottaRefresh(realoadTime);
		refreshingTime();
	};

	useEffect(() => {
		if (logged) {
			refreshData();
		}
	}, [isRefreshing]);

	useEffect(() => {
		if (logged) {
			refreshData();
			getRefreshTime();
		}
	}, []);

	return (
		<ChartContext.Provider
			value={{
				anxiety,
				depression,
				general,
				insomnia,
				productivity,
				rating,
				setAnxiety,
				setDepression,
				setGeneral,
				setInsomnia,
				setProductivity,
				setRating,
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
