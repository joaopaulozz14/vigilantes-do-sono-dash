import { useColors } from "main";
import { SHomeContainer, SideBar, UpperBar } from "presentation";

import { AllCharts } from "presentation/components/charts/AllCharts";
//import Overlay from "presentation/components/Overlay";
//import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
	const { activeBG } = useColors();
	/* 	const navigate = useNavigate();
	const handleSubmit = (): void => {
		navigate("/");
	}; */
	return (
		<>
			<UpperBar />
			<SHomeContainer baseBG1Dark={activeBG}>
				<SideBar />

				<AllCharts />
			</SHomeContainer>
			{/* <Overlay>
				<AllCharts />
			</Overlay> */}
		</>
	);
};

export default Home;
