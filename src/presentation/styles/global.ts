import {
	createGlobalStyle,
	DefaultTheme,
	GlobalStyleComponent,
	ThemeProps,
} from "styled-components/macro";
import theme from "./theme";

const GlobalStyle: GlobalStyleComponent<
	ThemeProps<DefaultTheme>,
	DefaultTheme
> = createGlobalStyle`
@media (max-width: 599px) {
	html {
		font-size: 1vw;
	}
}
@media (min-width: 600px) and (max-width: 1022px) {
	html {
		font-size: 0.7vw;
	}
}
@media (min-width: 1023px) {
	html {
		font-size: 0.8vh;
	}
}

*{
	margin: 0;
	padding: 0;
}

html, body {
		height: 100vh;
		box-sizing: border-box;
		font-family: ${theme.constants.FontFamily};
		font-weight: 400;
	}
body::-webkit-scrollbar-track {
	background-color: ${theme.colors.baseBg1Dark};
}
body::-webkit-scrollbar {
	width: 1.3vw;
	background: ${theme.colors.baseBg2Dark};
}
body::-webkit-scrollbar-thumb {
	background: ${theme.colors.baseBg2Dark};
	box-shadow: 0 0 3rem 0 ${theme.colors.baseBg2Dark}, inset 0 0 1.8rem 0.5rem ${theme.colors.contrast1}33;
	border-radius: 20px;
}
`;

export default GlobalStyle;
