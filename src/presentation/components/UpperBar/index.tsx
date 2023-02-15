import { useSwichers } from "main";
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

	// Essa constante deve vir do context de cores
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
					APP
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchAnxiety}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					GAD
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchDepression}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchDepression(!switchDepression);
					}}
				>
					PHQ
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchInsomnia}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					ISI
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchProductivity}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Produtividade
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchRating}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setSwitchRating(!switchRating);
					}}
				>
					Avaliações
				</SUpperBarButton>
			</aside>
		</SUpperBar>
	);
};
