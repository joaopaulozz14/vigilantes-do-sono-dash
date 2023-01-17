import { ReactNode } from "react";

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
