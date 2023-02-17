import { useColors, useSwichers } from "main";
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

	const { buttonsPrimaryColor } = useColors();

	return (
		<SUpperBar>
			<aside className="container">
				<SUpperBarButton
					isActive={switchGeneral}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchGeneral(!switchGeneral);
					}}
				>
					APP
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchAnxiety}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					GAD
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchDepression}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchDepression(!switchDepression);
					}}
				>
					PHQ
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchInsomnia}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					ISI
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchProductivity}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Produtividade
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchRating}
					isActiveColor={buttonsPrimaryColor}
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
