import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SBoxLogin = styled.section`
	width: 440px;
	height: 440px;
	padding: 10px;
	background-color: ${theme.colors.primaryColor};
	color: ${theme.colors.baseLine};
	border-radius: 8px;
	font-size: 16px;
	font-family: ${theme.constants.FontFamilyAlternative};
`;

export const SBoxLoginLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${theme.constants.FontFamilyAlternative};
	gap: 5px;
	h2 {
		margin-top: 5px;
	}
	img {
		height: 70px;
	}
`;
