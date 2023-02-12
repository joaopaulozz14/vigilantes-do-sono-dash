import { Providers, Router } from "main";
import { GlobalStyle } from "presentation";

function App(): JSX.Element {
	return (
		<div className="App">
			<Providers>
				<GlobalStyle />
				<Router />
			</Providers>
		</div>
	);
}

export default App;
