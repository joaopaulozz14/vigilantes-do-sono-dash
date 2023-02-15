import { theme } from "presentation/styles/System";
import styled from "styled-components/macro";

export const SUpperBar = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100%;
	height: 70px;
	margin-left: 105px;
	//border: 1px solid red;
	display: flex;
	align-items: center;
	justify-content: start;
	position: fixed;
	z-index: 1;
	.container {
		width: 60%;
		//margin: 0 auto;
		display: flex;
		justify-content: space-between;
		//margin-left: 0px;

		@media (min-width: 200px) {
			margin-left: 60px;
		}
		@media (min-width: 1200px) {
			margin-left: 200px;
		}

		@media (min-width: 1600px) {
			margin-left: 300px;
		}
	}
	div {
		width: 70px;
		height: 30px;
		border: 1px solid white;
		border-radius: 8px;
		cursor: pointer;
	}
	.active {
		background-color: red;
	}
	.ola {
		background-color: green;
	}
`;

/* type MenuItemStyled = { active: string | null };
export const SUpperBarButton = styled.div<MenuItemStyled>`
	${({ active }): FlattenSimpleInterpolation => css`
		height: 80px;
		width: calc(100% - 15px);
		border-radius: 16px 0 0 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		position: relative;
		background-color: ${active ? "red" : "green"};
	`}
`; */

export const SUpperBarButton = styled.div`
	height: 80px;
	width: calc(100% - 15px);
	border-radius: 16px 0 0 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 15px;
	position: relative;
`;
//${active && MenuItemModifiers.active(theme)}
