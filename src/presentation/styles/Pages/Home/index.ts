import { theme } from "../../System/theme";
import styled from "styled-components/macro";

export const SHomeContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	position: absolute;
	background-color: ${theme.colors.baseBg1Dark};
	display: flex;
`;

export const SHomeContainerDiv = styled.div`
	background-color: ${theme.colors.baseBg1Dark};
	width: 100%;
	height: 100%;
	margin-top: 70px;
	margin-left: 105px;
	z-index: 1;
`;
