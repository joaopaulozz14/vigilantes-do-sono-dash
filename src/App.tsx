import { IClientJSON } from "./@types";
import "./App.css";

const jsonData: IClientJSON = {};

function App(): JSX.Element {
	if (jsonData) {
		console.log(jsonData);
	}
	return (
		<div className="App">Vigilantes do sono - Dashboard - KerannaYumi</div>
	);
}

export default App;
