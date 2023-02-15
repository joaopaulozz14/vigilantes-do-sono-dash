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
	.container {
		margin: 0 auto;
		display: flex;
		gap: 30px;
		justify-content: space-around;
	}
`;
