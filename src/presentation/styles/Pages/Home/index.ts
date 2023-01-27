import { theme } from "../../System/theme";
import styled from "styled-components/macro";

export const SHomeContainer = styled.section`
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${theme.colors.baseBg1Dark};
	color: ${theme.colors.baseBg1Light};
	font-family: ${theme.constants.FontFamilyAlternative};
	display: flex;
	justify-content: space-between;
	p {
		font-size: 20px;
	}
`;

export const SHomeContent = styled.main`
	width: calc(100% - 450px);
`;
