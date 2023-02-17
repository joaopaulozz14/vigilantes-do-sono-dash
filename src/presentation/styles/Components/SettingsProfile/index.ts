import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SSettingsContainerProfile = styled.div`
	width: 100vw;
	margin: 0 auto;
	display: flex;
	margin-left: 105px;
	margin-top: 70px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 50px;
	z-index: 1;
	h1 {
		font-size: 16px;
	}
	button {
		padding: 17.5px 0;
		border-radius: 8px;
		margin-top: 10px;
		background-color: ${theme.colors.secondaryColor};
		font-size: 16px;

		cursor: pointer;
	}
	img {
		height: 300px;
		border-radius: 50%;
		cursor: pointer;
		//margin-right: 50px;
	}
	label {
		font-size: 12px;
		margin: 0 5px;
	}
`;

/**Profile configurations */
export const SSettingsFormProfile = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
export const SSettingsInputProfile = styled.input`
	width: 350px;
	height: 50px;
	padding: 0 10px;
	border: 1px solid black;
	border-radius: 8px;
	margin: 2px 0;
	//background: ${theme.colors.baseBg2Dark};
`;
