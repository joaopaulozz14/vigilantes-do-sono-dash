import { theme } from "presentation";
import styled, {
	css,
	FlattenSimpleInterpolation,
} from "styled-components/macro";

const SMenuItemModifiers = {
	buttonIcon: (): FlattenSimpleInterpolation => css`
		height: 56px;
		width: 56px;
		border-radius: 8px;
		padding: 16px;
		border: none;
		cursor: pointer;
		color: white;
		background-color: ${theme.colors.primaryColor};
		margin: 5px 0;
		&:active {
			background-color: ${theme.colors.primaryOpacity};
			color: white;
		}
	`,
};
export const SSideMenu = styled.menu`
	margin: 0;
	padding: 20px 0;
	height: 100vh;
	width: 105px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	//border-radius: 0 0px 16px 0;
	box-sizing: border-box;
	background-color: ${theme.colors.primaryColor};
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
`;

export const SMenuLogo = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 5px 20px 0;
	img {
		height: 70px;
	}
`;

export const SMenuItem = styled.button`
	height: 80px;
	width: calc(100% - 15px);
	border-radius: 16px 0 0 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	${SMenuItemModifiers.buttonIcon()};
	div {
		z-index: 1;
	}
`;

export const SMenuItemLogout = styled.button`
	${SMenuItemModifiers.buttonIcon()};
`;
