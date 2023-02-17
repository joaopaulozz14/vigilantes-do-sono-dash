import styled, { css, Interpolation } from "styled-components/macro";

interface colorProps {
	primaryColor: string;
	backgroundColor: string;
}

export const SSettingsContainerVisuais = styled.div`
	width: 100vw;

	height: 100%;
	display: flex;
	margin-top: 70px;
	//flex-direction: column;
	flex-wrap: wrap;
	align-items: start;
	justify-content: center;
	gap: 50px;
	margin: auto 0;
	margin-left: 105px;
	z-index: 1;

	h1 {
		font-size: 16px;
	}

	label {
		font-size: 12px;
		margin: 0 5px;
	}
`;
export const SSettingsFormVisuais = styled.form<colorProps>`
	display: flex;
	flex-direction: column;
	background-color: red;
	flex-wrap: wrap;
	padding: 10px;
	border-radius: 16px;
	gap: 40px;
	${({ primaryColor, backgroundColor }): Interpolation<colorProps> => {
		return css`
			background-color: ${backgroundColor}22;
			box-shadow: ${primaryColor}dd -5px 5px, ${primaryColor}bb -10px 10px,
				${primaryColor}99 -15px 15px, ${primaryColor}77 -20px 20px,
				${primaryColor}55 -25px 25px;
		`;
	}}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		//border: 1px solid red;
		//flex-wrap: wrap;
	}
`;

export const SSettingsFormVisuaisTheme = styled.form<colorProps>`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 10px;
	border-radius: 8px;
	${({ primaryColor, backgroundColor }): Interpolation<colorProps> => {
		return css`
			background-color: ${backgroundColor}22;
			box-shadow: ${primaryColor}dd -5px 5px, ${primaryColor}bb -10px 10px,
				${primaryColor}99 -15px 15px, ${primaryColor}77 -20px 20px,
				${primaryColor}55 -25px 25px;
		`;
	}}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 25px;
		//border: 1px solid red;
	}
	img {
		height: 30px;
		width: 30px;
	}
`;

export const SSettingsInputVisuais = styled.input`
	border-radius: 8px;
	width: 50px;
	height: 40px;
`;
