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

	div {
		height: 300px;
		width: 500px;
		padding-top: 70px;
		padding-bottom: -70px;
	}

	@media (max-width: 1300px) {
		margin-top: 70px;
		div {
			height: 250px;
			width: 400px;
		}
	}
	@media (max-width: 800px) {
		margin-top: 70px;
		div {
			height: 250px;
			width: 350px;
		}
	}
`;
