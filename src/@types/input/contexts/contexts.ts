import { Dispatch, ReactNode, SetStateAction } from "react";
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
	anxiety: IChartData | null;
	depression: IChartData | null;
	general: IGeneral | null;
	insomnia: IChartData | null;
	productivity: IChartData | null;
	rating: IRatingData | null;
	refresh: number;
	setAnxiety: Dispatch<SetStateAction<IChartData | null>>;
	setDepression: Dispatch<SetStateAction<IChartData | null>>;
	setGeneral: Dispatch<SetStateAction<IGeneral | null>>;
	setInsomnia: Dispatch<SetStateAction<IChartData | null>>;
	setProductivity: Dispatch<SetStateAction<IChartData | null>>;
	setRating: Dispatch<SetStateAction<IRatingData | null>>;
	setRefresh: Dispatch<SetStateAction<number>>;
	refreshData: () => Promise<void>;
	setRefreshTime: () => void;
}
