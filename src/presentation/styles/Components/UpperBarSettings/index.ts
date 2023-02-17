import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SUpperBarSettings = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100vw;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	.container {
		margin-left: 100px;
		display: flex;
		justify-content: center;
	}
`;
