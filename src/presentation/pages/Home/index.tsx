/* eslint-disable @typescript-eslint/no-unused-vars */
import { SHomeContainer, SideBar, UpperBar } from "presentation";

import { AllCharts } from "presentation/components/charts/AllCharts";

const Home = (): JSX.Element => {
	return (
		<>
			<UpperBar />
			<SHomeContainer>
				<SideBar />

				<AllCharts />
			</SHomeContainer>
		</>
	);
};

export default Home;
