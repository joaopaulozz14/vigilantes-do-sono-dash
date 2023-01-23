import { Login } from "presentation";
import Home from "presentation/pages/Home";
import { Route, Routes } from "react-router-dom";

export const Router = (): JSX.Element => {
	return (
		<Routes>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/"
				element={<Home />}
			/>
		</Routes>
	);
};
