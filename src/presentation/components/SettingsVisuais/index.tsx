import {
	SSettingsContainerVisuais,
	SSettingsFormVisuais,
	SSettingsFormVisuaisTheme,
	SSettingsInputVisuais,
} from "presentation";
import { useColors } from "main";
import { useState } from "react";
import sun from "../../assets/images/sunny.png";
import moon from "../../assets/images/moon.png";
export const SettingsVisuais = (): JSX.Element => {
	const {
		primaryColor,
		chartBarBGPrimaryColor,
		chartBarBGSecondaryColor,
		chartLineBGColor,
		secondaryBGColor,
	} = useColors();

	const [firstColor, setFirstColor] = useState(chartBarBGPrimaryColor);
	const [secondaryColor, setSecondaryColor] = useState(
		chartBarBGSecondaryColor,
	);
	const [lineColor, setLineColor] = useState(chartLineBGColor);
	const [thirdColor, setThirdColor] = useState(secondaryBGColor);
	return (
		<SSettingsContainerVisuais>
			<SSettingsFormVisuais
				primaryColor={primaryColor}
				backgroundColor={secondaryBGColor}
				action=""
				className="formColors"
			>
				<h1>Personalize as cores dos gráficos</h1>
				<div>
					<label htmlFor="firstColor">First Color:</label>
					<SSettingsInputVisuais
						type="color"
						id="firstColor"
						name="firstColor"
						value={firstColor}
						onChange={(e): void => {
							setFirstColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="secondColor">Second Color:</label>
					<SSettingsInputVisuais
						id="secondColor"
						name="secondColor"
						type="color"
						value={secondaryColor}
						onChange={(e): void => {
							setSecondaryColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="thirdColor">Third Color:</label>
					<SSettingsInputVisuais
						id="thirdColor"
						name="thirdColor"
						type="color"
						value={thirdColor}
						onChange={(e): void => {
							setThirdColor(e.target.value);
						}}
					/>
				</div>

				<div>
					<label htmlFor="lineColor">Line Color:</label>
					<SSettingsInputVisuais
						id="lineColor"
						name="lineColor"
						type="color"
						value={lineColor}
						onChange={(e): void => {
							setLineColor(e.target.value);
						}}
					/>
				</div>
			</SSettingsFormVisuais>
			<SSettingsFormVisuaisTheme
				action=""
				primaryColor={primaryColor}
				backgroundColor={secondaryBGColor}
			>
				<h1>Personalize o tema da interface</h1>
				<div>
					<input
						type="radio"
						id="lightTheme"
						name="lightThme"
						value="light"
					/>
					<label htmlFor="lightTheme">
						<img
							src={sun}
							alt=""
						/>
					</label>
				</div>

				<div>
					<input
						type="radio"
						id="darkTheme"
						name="darkTheme"
						value="dark"
					/>
					<label htmlFor="darkTheme">
						<img
							src={moon}
							alt=""
						/>
					</label>
				</div>
			</SSettingsFormVisuaisTheme>
		</SSettingsContainerVisuais>
	);
};
