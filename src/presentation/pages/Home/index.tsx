import UpperBar from "../../components/upperBar/index";
import SideBar from "../../components/sideBar/index";
import { Container } from "presentation/styles/Home";

const Home = (): JSX.Element => {
	return (
		<Container>
			<SideBar />
			<UpperBar />
			<main>Página Home</main>
		</Container>
	);
};

export default Home;
