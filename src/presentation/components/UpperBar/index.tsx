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
					onClick={(): void => {
						setSwitchGeneral(!switchGeneral);
					}}
				>
					Dados do App
				</div>
				<div
					onClick={(): void => {
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					Ansiedade
				</div>
				<div
					onClick={(): void => {
						setSwitchDepression(!switchDepression);
					}}
				>
					Depressão
				</div>
				<div
					onClick={(): void => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					Insonia
				</div>
				<div
					onClick={(): void => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Produtividade
				</div>
				<div
					onClick={(): void => {
						setSwitchRating(!switchRating);
					}}
				>
					Avaliações
				</div>
			</aside>
		</SUpperBar>
	);
};
