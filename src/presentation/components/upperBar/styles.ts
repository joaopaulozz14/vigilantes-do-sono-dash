import styled from "styled-components/macro";
import { theme } from "../../styles/theme";
export const Menu = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100vw;
	height: 70px;
	display: flex;
	align-items: center;
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
