import styled from "styled-components";
import { theme } from "presentation/styles/System";

export const SSettings = styled.section`
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${theme.colors.baseBg1Dark};
	color: ${theme.colors.baseBg1Light};
	font-family: ${theme.constants.FontFamilyAlternative};
	display: flex;
	position: relative;
	.div {
		padding: 0;
		width: 100%;
		height: 100%;
		//background-color: green;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const SSettingsContainer = styled.div`
	width: 100vw;
	//background-color: red;
	display: flex;
	margin-left: 105px;
	margin-top: 70px;
	flex-direction: column;
	z-index: 1;
	form {
		display: flex;
		flex-direction: column;
	}
	input {
		padding: 20px 5px;
		border: 1px solid black;
		border-radius: 8px;
		margin: 5px 0;
	}
`;

export const SSettingsContainerDiv = styled.div`
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
