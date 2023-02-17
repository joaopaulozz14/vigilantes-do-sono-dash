import { useSettings } from "main";
import { SettingsTab } from "@types";
import { SideBar, UpperBarSettings, SSettings } from "presentation";
import { SettingsProfile } from "presentation/components/SettingsProfile";
import { SettingsVisuais } from "presentation";
const Settings = (): JSX.Element => {
	const { isActive } = useSettings();
	const profile = isActive === SettingsTab.PROFILE;
	const visuais = isActive === SettingsTab.VISUAL;
	return (
		<SSettings>
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
