import { IClientJSON } from "@types";
import { Providers, Router } from "main";
import { GlobalStyle } from "presentation";
import "./App.css";

const jsonData: IClientJSON = {};

function App(): JSX.Element {
	if (jsonData) {
		console.log(jsonData);
	}
	return (
		<div className="App">
			Vigilantes do sono - Dashboard - KerannaYumi
			<Providers>
				<GlobalStyle />
				<Router />
			</Providers>
		</div>
	);
}

export default App;
