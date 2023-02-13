/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSwichers } from "main";
import { SUpperBar } from "../../styles/Components/UpperBar";

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

	return (
		<SUpperBar>
			<aside className="container">
				<div
					onClick={() => {
						setSwitchGeneral(!switchGeneral);
					}}
				>
					Barra de abrir o gráfico de gerais
				</div>
				<div
					onClick={() => {
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					Barra de abrir o gráfico de ansiedade
				</div>
				<div
					onClick={() => {
						setSwitchDepression(!switchDepression);
					}}
				>
					Barra de abrir o gráfico de depressão
				</div>
				<div
					onClick={() => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					Barra de abrir o gráfico de insonia
				</div>
				<div
					onClick={() => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Barra de abrir o gráfico de produtividade
				</div>
				<div
					onClick={() => {
						setSwitchRating(!switchRating);
					}}
				>
					Barra de abrir o gráfico de avaliações
				</div>
			</aside>
		</SUpperBar>
	);
};
