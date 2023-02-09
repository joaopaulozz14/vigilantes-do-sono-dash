import { Dispatch, ReactNode, SetStateAction } from "react";
import { IChartData } from "../client_json";

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
	insomnia: IChartData | null;
	setInsomnia: Dispatch<SetStateAction<IChartData | null>>;
	depression: IChartData | null;
	setDepression: Dispatch<SetStateAction<IChartData | null>>;
	anxiety: IChartData | null;
	setAnxiety: Dispatch<SetStateAction<IChartData | null>>;
	productivity: IChartData | null;
	setProductivity: Dispatch<SetStateAction<IChartData | null>>;
	refresh: number;
	setRefresh: Dispatch<SetStateAction<number>>;
	refreshData: () => string | void;
	setRefreshTime: () => void;
}
