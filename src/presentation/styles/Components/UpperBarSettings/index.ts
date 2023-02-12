import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SUpperBarSettings = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100vw;
	height: 70px;
	display: flex;
	align-items: center;
	margin-left: 105px;
	position: fixed;
	//overflow: hidden;
	.container {
		//width: 30%;
		margin: 0 auto;
		//position: fixed;
		display: flex;
		gap: 30px;
		justify-content: space-around;
	}
	div {
		width: 70px;
		height: 30px;
		border: 1px solid white;
		border-radius: 8px;
	}
`;
