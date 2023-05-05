import { AppState } from "@types";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { IChartOutputDatasets, ILineChartData } from "../charts";
import { IChartData, IGeneral, IRatingData } from "../client_json";

export interface AllProvidersProps {
	children: ReactNode;
}

export interface AuthProviderData {
	logged: boolean;
	login: (params: Auth) => void;
	logout: () => void;
	currentUser: Auth | undefined;
	checkTokenExpiration: () => void;
}

export interface Auth {
	token: string;
	user: CurrentUser;
}

export interface CurrentUser {
	id: string;
	name: string;
	email: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface ChartProviderData {
	anxiety: IChartData;
	depression: IChartData;
	general: IGeneral;
	generalMedia: IGeneral;
	lastGeneral: IGeneral;
	insomnia: IChartData;
	productivity: IChartData;
	rating: IRatingData;
	refresh: number;
	setRefresh: Dispatch<SetStateAction<number>>;
	refreshData: () => Promise<void>;
	setRefreshTime: () => void;
}

export interface SortDataChartProviderData {
	currentGeneralChart: IChartOutputDatasets;
	currentAnxietyChart: ILineChartData;
	currentInsomniaChart: ILineChartData;
	currentDepressionChart: ILineChartData;
	currentProductivityChart: IChartOutputDatasets;
	currentRatingChart: IChartOutputDatasets;
}

export interface ChartSwitchersProviderData {
	switchAnxiety: boolean;
	switchDepression: boolean;
	switchGeneral: boolean;
	switchInsomnia: boolean;
	switchProductivity: boolean;
	switchRating: boolean;
	arrayCharts: AppState;
	setSwitchAnxiety: Dispatch<SetStateAction<boolean>>;
	setSwitchDepression: Dispatch<SetStateAction<boolean>>;
	setSwitchGeneral: Dispatch<SetStateAction<boolean>>;
	setSwitchInsomnia: Dispatch<SetStateAction<boolean>>;
	setSwitchProductivity: Dispatch<SetStateAction<boolean>>;
	setSwitchRating: Dispatch<SetStateAction<boolean>>;
	setArrayCharts: Dispatch<SetStateAction<AppState>>;
}

export interface ColorsProviderData {
	activeBG: string;
	activeColor: boolean;
	buttonsPrimaryColor: string;
	primaryColor: string;
	secondaryColor: string;
	primaryBGColor: string;
	secondaryBGColor: string;
	chartLineBGColor: string;
	chartLineBorderColor: string;
	chartBarBGPrimaryColor: string;
	chartBarBorderPrimaryColor: string;
	chartBarBGSecondaryColor: string;
	chartBarBorderSecondaryColor: string;
	setActiveBG: Dispatch<SetStateAction<string>>;
	setActiveColor: Dispatch<SetStateAction<boolean>>;
	setButtonsPrimaryColor: Dispatch<SetStateAction<string>>;
	setPrimaryColor: Dispatch<SetStateAction<string>>;
	setSecondaryColor: Dispatch<SetStateAction<string>>;
	setPrimaryBGColor: Dispatch<SetStateAction<string>>;
	setSecondaryBGColor: Dispatch<SetStateAction<string>>;
	setChartLineBGColor: Dispatch<SetStateAction<string>>;
	setChartLineBorderColor: Dispatch<SetStateAction<string>>;
	setChartBarBGPrimaryColor: Dispatch<SetStateAction<string>>;
	setChartBarBorderPrimaryColor: Dispatch<SetStateAction<string>>;
	setChartBarBGSecondaryColor: Dispatch<SetStateAction<string>>;
	setChartBarBorderSecondaryColor: Dispatch<SetStateAction<string>>;
	saveColors: () => void;
}

export interface SettingsProviderData {
	setIsActive: Dispatch<SetStateAction<string>>;
	isActive: string;
}
