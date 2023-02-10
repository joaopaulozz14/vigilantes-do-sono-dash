import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SUpperBar = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100%;
	height: 70px;
	margin-left: 105px;
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 1;
	.container {
		width: 60%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}
	div {
		width: 70px;
		height: 30px;
		border: 1px solid white;
		border-radius: 8px;
	}
`;
