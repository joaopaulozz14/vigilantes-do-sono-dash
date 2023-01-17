import { Route, Routes } from "react-router-dom";

export const Router = (): JSX.Element => {
	return (
		<Routes>
			<Route
				path="/"
				element={<div>home</div>}
			/>
		</Routes>
	);
};
