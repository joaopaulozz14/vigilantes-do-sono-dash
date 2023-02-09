import Login from "presentation/pages/Login";
import Home from "presentation/pages/Home";
import Settings from "presentation/pages/Settings";
import { RoutePath } from "@types";
import { Route, Routes } from "react-router-dom";

export const Router = (): JSX.Element => {
	return (
		<Routes>
			<Route
				path={RoutePath.LOGIN}
				element={<Login />}
			/>
			<Route
				path={RoutePath.HOME}
				element={<Home />}
			/>
			<Route
				path={RoutePath.SETTINGS}
				element={<Settings />}
			/>
		</Routes>
	);
};
