import {
	SSettingsContainerProfile,
	SSettingsFormProfile,
	SSettingsInputProfile,
} from "presentation";
import logo from "../../assets/images/Profile.png";
export const SettingsProfile = (): JSX.Element => {
	return (
		<SSettingsContainerProfile>
			<img
				src={logo}
				alt=""
			/>
			<SSettingsFormProfile action="">
				<SSettingsInputProfile
					type="text"
					placeholder="Nome"
				/>
				<SSettingsInputProfile
					type="email"
					placeholder="Email"
				/>
				<SSettingsInputProfile
					type="password"
					placeholder="Password"
				/>
				<button>save</button>
			</SSettingsFormProfile>
		</SSettingsContainerProfile>
	);
};
