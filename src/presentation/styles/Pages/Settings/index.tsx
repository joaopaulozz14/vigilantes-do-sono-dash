import styled, {
	css,
	//FlattenSimpleInterpolation,
	Interpolation,
} from "styled-components";
import { theme } from "presentation/styles/System";

interface colorSettings {
	baseBG: string;
	baseColor: boolean;
}

/* const SModifierColor = {
	color: ({ baseBG }): FlattenSimpleInterpolation => css`
		color: ${baseBG};
	`,
}; */
export const SSettings = styled.section<colorSettings>`
	${({ baseBG, baseColor }): Interpolation<colorSettings> => {
		return css`
			min-width: 100vw;
			min-height: 100vh;
			//color: ${theme.colors.baseBg1Light};
			font-family: ${theme.constants.FontFamilyAlternative};
			display: flex;
			position: relative;
			background-color: ${baseBG};
			color: ${baseColor
				? theme.colors.baseBg1Light
				: theme.colors.baseBg1Dark};
		`;
	}}
`;
