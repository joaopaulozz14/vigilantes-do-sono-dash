import { useColors, useSettings } from "main";
import { SettingsTab } from "@types";
import { SideBar, UpperBarSettings, SSettings } from "presentation";
import { SettingsProfile } from "presentation/components/SettingsProfile";
import { SettingsVisuais } from "presentation";
import { useEffect } from "react";
const Settings = (): JSX.Element => {
	const { isActive } = useSettings();
	const { activeBG, activeColor } = useColors();
	const profile = isActive === SettingsTab.PROFILE;
	const visuais = isActive === SettingsTab.VISUAL;
	useEffect(() => {
		console.log(activeBG);
	}, []);
	return (
		<SSettings
			baseBG={activeBG}
			baseColor={activeColor}
		>
			<div className="barra">
				<UpperBarSettings />
			</div>
			<SideBar />
			{profile && <SettingsProfile />}
			{visuais && <SettingsVisuais />}
		</SSettings>
	);
};

export default Settings;
