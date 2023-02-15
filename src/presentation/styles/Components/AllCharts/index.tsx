import { theme } from "../../System";
import styled from "styled-components/macro";

export const SCharts = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 100px 0 100px 0;
	display: flex;
	gap: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
	margin-left: 105px;

	@media (max-width: 1300px) {
		div {
			height: 250px;
			width: 420px;
		}
	}
	@media (max-width: 520px) {
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
	background-color: ${theme.colors.primaryColor}22;
	box-shadow: ${theme.colors.primaryColor}dd -5px 5px,
		${theme.colors.primaryColor}bb -10px 10px,
		${theme.colors.primaryColor}99 -15px 15px,
		${theme.colors.primaryColor}77 -20px 20px,
		${theme.colors.primaryColor}55 -25px 25px;
`;
