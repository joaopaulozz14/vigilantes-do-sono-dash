/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	ChartLine,
	MultiChart,
	SHomeContainer,
	SideBar,
	UpperBar,
} from "presentation";

const Home = (): JSX.Element => {
	return (
		<SHomeContainer>
			<SideBar />
			<UpperBar />
			{/* <ChartLine /> */}
			{/* <MultiChart /> */}
		</SHomeContainer>
	);
};

export default Home;
