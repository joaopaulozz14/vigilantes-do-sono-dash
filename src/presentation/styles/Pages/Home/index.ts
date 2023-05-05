import styled, { css, Interpolation } from "styled-components/macro";

export interface colorsHome {
	baseBG1Dark: string;
}

export const SHomeContainer = styled.div<colorsHome>`
	min-height: 100vh;
	width: 100%;
	position: absolute;
	display: flex;
	${({ baseBG1Dark }): Interpolation<colorsHome> => {
		return css`
			background-color: ${baseBG1Dark};
		`;
	}}
`;
