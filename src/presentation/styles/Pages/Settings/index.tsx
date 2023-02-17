import styled from "styled-components";
import { theme } from "presentation/styles/System";

export const SSettings = styled.section`
	min-width: 100vw;
	min-height: 100vh;
	background-color: #1f202b;
	color: ${theme.colors.baseBg1Light};
	font-family: ${theme.constants.FontFamilyAlternative};
	display: flex;
	position: relative;
`;
