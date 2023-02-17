import { SettingsTab } from "@types";
import { useColors, useSettings } from "main";
import { SUpperBarButton, SUpperBarSettings } from "presentation/styles";

export const UpperBarSettings = (): JSX.Element => {
	const { isActive, setIsActive } = useSettings();

	const { buttonsPrimaryColor } = useColors();

	return (
		<SUpperBarSettings>
			<aside className="container">
				<SUpperBarButton
					isActive={isActive === SettingsTab.PROFILE}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.PROFILE);
					}}
				>
					Profile
				</SUpperBarButton>
				<SUpperBarButton
					isActive={isActive === SettingsTab.VISUAL}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.VISUAL);
					}}
				>
					Visuais
				</SUpperBarButton>
				{/* <SUpperBarButton
					isActive={isActive === SettingsTab.DATA}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.DATA);
					}}
				>
					Dados
				</SUpperBarButton> */}
			</aside>
		</SUpperBarSettings>
	);
};
