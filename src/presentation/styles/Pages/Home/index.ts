import { theme } from "../../System/theme";
import styled from "styled-components/macro";

export const SHome = styled.section`
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${theme.colors.baseBg1Dark};
	color: ${theme.colors.baseBg1Light};
	font-family: ${theme.constants.FontFamilyAlternative};
	display: flex;
	flex-direction: column;
	position: relative;
	p {
		font-size: 20px;
	}
`;

export const SHomeContainer = styled.div`
	height: 100vh;
	background-color: red;
	display: flex;
	margin-left: 105px;

	//flex-direction: column;
	align-items: center;
	box-sizing: content-box;
	z-index: 1;
`;

export const SHomeContainerDiv = styled.div`
	//background-color: green;
	margin: auto 0;
	display: flex;
	justify-content: center;
	gap: 30px;
	align-items: center;
	img {
		height: 300px;
		border-radius: 50%;
		//margin-right: 50px;
	}
`;
