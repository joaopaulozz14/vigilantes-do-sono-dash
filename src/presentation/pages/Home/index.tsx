import HighBar from "../../components/highBar/index";
import SideBar from "../../components/sideBar/index";
import { Container } from "presentation/styles/Home";

const Home = (): JSX.Element => {
	return (
		<Container>
			<div>
				<HighBar />
			</div>
			<div>
				<SideBar />
			</div>
			<main>Página Home</main>
		</Container>
	);
};

export default Home;
