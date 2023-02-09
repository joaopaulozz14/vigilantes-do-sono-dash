/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	ChartLine,
	MultiChart,
	SHome,
	SHomeContainer,
	SHomeContainerDiv,
	SideBar,
	UpperBar,
} from "presentation";

import { AllCharts } from "presentation/components/charts/AllCharts";

const Home = (): JSX.Element => {
	return (
		<SHome>
			<div>
				<SideBar />
				<UpperBar />
			</div>
			<SHomeContainer>
				<SHomeContainerDiv>
					<AllCharts />
					<AllCharts />
				</SHomeContainerDiv>
			</SHomeContainer>
		</SHome>
	);
};

export default Home;
