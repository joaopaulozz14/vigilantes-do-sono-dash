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
import {
	/*ChartServices,*/
	gad,
	isi,
	phq,
	prod,
	generalData,
	lastGeneralData,
	ratingData,
	Timer,
	arithmeticAverage,
} from "main";
import { useAuth } from "./AccountContext";

const ChartContext = createContext<ChartProviderData>({} as ChartProviderData);

export const ChartProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();

	const [anxiety, setAnxiety] = useState<IChartData>(gad);
	const [depression, setDepression] = useState<IChartData>(phq);
	const [general, setGeneral] = useState<IGeneral>(generalData);
	const [generalMedia, setGeneralMedia] = useState<IGeneral>(generalData);
	const [lastGeneral, setLastGeneral] = useState<IGeneral>(lastGeneralData);
	const [insomnia, setInsomnia] = useState<IChartData>(isi);
	const [productivity, setProductivity] = useState<IChartData>(prod);
	const [rating, setRating] = useState<IRatingData>(ratingData);

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
		// Dados da API
		// const charts = new ChartServices();
		// const currentAnxiety = await charts.anxiety();
		// const currentDepression = await charts.depression();
		// const currentGeneral = await charts.general();
		// const currentLastGeneral = await charts.LastGeneral();
		// const currentInsomnia = await charts.insomnia();
		// const currentProductivity = await charts.productivity();
		// const currentRating = await charts.rating();

		const media = arithmeticAverage(generalData, lastGeneralData);

		//Dados em memória
		setAnxiety(isi);
		setDepression(gad);
		setGeneral(generalData);
		setGeneralMedia(media);
		setLastGeneral(lastGeneralData);
		setInsomnia(phq);
		setProductivity(prod);
		setRating(ratingData);

		// Dados da API
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
				generalMedia,
				lastGeneral,
				insomnia,
				productivity,
				rating,
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
