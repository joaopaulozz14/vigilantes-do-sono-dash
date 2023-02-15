import styled from "styled-components";

export const SCharts = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-left: 105px;

	@media (max-width: 1700px) {
		margin-top: 70px;
	}
	@media (max-width: 1300px) {
		margin-top: 70px;
		div {
			height: 250px;
			width: 420px;
		}
	}
	@media (max-width: 520px) {
		margin-top: 70px;
		div {
			height: 250px;
			width: 350px;
		}
	}
`;

export const SChartsContent = styled.div`
	height: 300px;
	width: 500px;
	display: flex;
	align-items: center;
	margin: 0 10px;
	border-bottom-left-radius: 14px;
	box-shadow: rgb(11, 19, 32, 0.7) -5px 5px, rgba(11, 19, 32, 0.4) -10px 10px,
		rgba(11, 19, 32, 0.5) -15px 15px, rgba(11, 19, 32, 0.3) -20px 20px,
		rgba(11, 19, 32, 0.05) -25px 25px;
`;
