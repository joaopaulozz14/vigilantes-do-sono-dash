import { SettingsTab } from "@types";
import { SUpperBarButton, SUpperBarSettings } from "presentation/styles";
import { useState } from "react";

export const UpperBarSettings = (): JSX.Element => {
	// essa variavel precisa vir de um contexto de configurações, para poder modificar a aba que está aparecendo
	const [isActive, setIsActive] = useState("profile");

	// Essa constante deve vir do context de cores
	const primaryColor = "#5e9bf8";

	return (
		<SUpperBarSettings>
			<aside className="container">
				<SUpperBarButton
					isActive={isActive === SettingsTab.PROFILE}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.PROFILE);
					}}
				>
					Profile
				</SUpperBarButton>
				<SUpperBarButton
					isActive={isActive === SettingsTab.VISUAL}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.VISUAL);
					}}
				>
					Visuais
				</SUpperBarButton>
				<SUpperBarButton
					isActive={isActive === SettingsTab.DATA}
					isActiveColor={primaryColor}
					onClick={(): void => {
						setIsActive(SettingsTab.DATA);
					}}
				>
					Dados
				</SUpperBarButton>
			</aside>
		</SUpperBarSettings>
	);
};
