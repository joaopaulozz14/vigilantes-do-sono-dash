import styled from "styled-components/macro";
import { theme } from "presentation/styles";
export const Menu = styled.menu`
	margin: 0;
	padding: 20px 0;
	height: 100vh;
	width: 105px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 0 16px 16px 0;
	box-sizing: border-box;
	background: ${theme.colors.primaryColor};
`;

export const MenuLogo = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 5px 20px 0;
	img {
		height: 70px;
	}
`;

type MenuItemStyled = { active: boolean };

export const MenuItem = styled.button<MenuItemStyled>`
	height: 80px;
	width: calc(100% - 15px);
`;
