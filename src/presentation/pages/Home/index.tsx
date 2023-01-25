import UpperBar from "../../components/upperBar/index";
import SideBar from "../../components/sideBar/index";
import { SHomeContainer } from "presentation";

const Home = (): JSX.Element => {
	return (
		<SHomeContainer>
			<SideBar />
			<UpperBar />
		</SHomeContainer>
	);
};

export default Home;
