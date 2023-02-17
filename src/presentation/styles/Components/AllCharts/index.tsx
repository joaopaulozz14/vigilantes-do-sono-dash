import { theme } from "../../System";
import styled, { css, Interpolation } from "styled-components/macro";

export interface colorsProps {
	primaryColor: string;
	backgroundColor: string;
}
export const SCharts = styled.div`
	//min-height: 100vh;
	width: 100%;
	padding: 100px 0 10px 0;
	display: flex;
	gap: 25px;
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

export const SChartsContent = styled.div<colorsProps>`
	height: 300px;
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
	border-bottom-left-radius: 14px;
	${({ primaryColor, backgroundColor }): Interpolation<colorsProps> => {
		return css`
			background-color: ${backgroundColor}22;
			box-shadow: ${primaryColor}dd -5px 5px, ${primaryColor}bb -10px 10px,
				${primaryColor}99 -15px 15px, ${primaryColor}77 -20px 20px,
				${primaryColor}55 -25px 25px;
		`;
	}}
`;

export const SHeaderCharts = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: ${theme.colors.primaryBorderChartColor};

	align-items: center;
	div {
		width: 25%;
		height: 25px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	h2,
	button {
		align-items: center;
		font-family: ${theme.constants.FontFamily};
		cursor: pointer;
	}
`;
