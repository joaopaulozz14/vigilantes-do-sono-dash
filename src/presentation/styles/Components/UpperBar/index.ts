import { theme } from "presentation/styles/System";
import styled, { css, Interpolation } from "styled-components/macro";

export interface IMenuSelectorProps {
	isActive: boolean;
	isActiveColor: string;
}

export const SUpperBar = styled.menu`
	background-color: ${theme.colors.primaryColor};
	width: 100%;
	height: 70px;
	margin-left: 105px;
	display: flex;
	align-items: center;
	justify-content: start;
	position: fixed;
	z-index: 1;
	.container {
		width: 60%;
		display: flex;
		justify-content: space-between;

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

export const SUpperBarButton = styled.div<IMenuSelectorProps>`
	width: 70px;
	height: 30px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 15px;
	position: relative;
	cursor: pointer;
	${({ isActive, isActiveColor }): Interpolation<IMenuSelectorProps> => {
		return (
			!isActive &&
			css`
				box-shadow: inset 0 0 5px 1px ${isActiveColor}77,
					0 0 5px 1px ${isActiveColor}77;
				background-color: ${isActiveColor}33;
			`
		);
	}}
	${({ isActive, isActiveColor }): Interpolation<IMenuSelectorProps> => {
		return (
			isActive &&
			css`
				box-shadow: inset 0 0 10px 1px ${isActiveColor}ee,
					0 0 10px 1px ${isActiveColor}ee;
				background-color: ${isActiveColor}aa;
			`
		);
	}}
`;
