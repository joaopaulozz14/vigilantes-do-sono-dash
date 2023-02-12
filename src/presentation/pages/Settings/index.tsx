import {
	SideBar,
	UpperBarSettings,
	SSettingsContainerDiv,
	SSettingsContainer,
	SSettings,
} from "presentation";
import logo from "../../assets/images/vigilantes.png";

const Settings = (): JSX.Element => {
	return (
		<SSettings>
			<div>
				<UpperBarSettings />
				<SideBar />
			</div>

			<SSettingsContainer>
				<SSettingsContainerDiv>
					<img
						src={logo}
						alt=""
					/>
					<form action="">
						<input
							type="text"
							placeholder="Vigilantes do sono"
						/>
						<input
							type="number"
							placeholder="19/03/2000"
						/>
						<div>
							<input
								type="text"
								placeholder="São Paulo"
							/>
							<input
								type="text"
								placeholder="SP"
							/>
						</div>
						<input
							type="text"
							placeholder="flasfe32-34"
						/>
						<button>save</button>
					</form>
				</SSettingsContainerDiv>
			</SSettingsContainer>
		</SSettings>
	);
};

export default Settings;
