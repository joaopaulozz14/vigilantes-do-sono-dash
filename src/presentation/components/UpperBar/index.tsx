import { useSwichers } from "main";
// import { useState } from "react";
import { SUpperBar, SUpperBarButton } from "../../styles/Components/UpperBar";

export const UpperBar = (): JSX.Element => {
	const {
		switchAnxiety,
		switchDepression,
		switchGeneral,
		switchInsomnia,
		switchProductivity,
		switchRating,
		setSwitchAnxiety,
		setSwitchDepression,
		setSwitchGeneral,
		setSwitchInsomnia,
		setSwitchProductivity,
		setSwitchRating,
	} = useSwichers();

	const primaryColor = "#5e9bf8";

	return (
		<SUpperBar>
			<aside className="container">
				<SUpperBarButton
					isActive={switchGeneral}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchGeneral(!switchGeneral);
					}}
				>
					Barra de abrir o gráfico
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchAnxiety}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					Barra de abrir o gráfico de ansiedade
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchDepression}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchDepression(!switchDepression);
					}}
				>
					Barra de abrir o gráfico de depressão
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchInsomnia}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					Barra de abrir o gráfico de insonia
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchProductivity}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Barra de abrir o gráfico de produtividade
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchRating}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchRating(!switchRating);
					}}
				>
					Barra de abrir o gráfico de avaliações
				</SUpperBarButton>
			</aside>
		</SUpperBar>
	);
};
