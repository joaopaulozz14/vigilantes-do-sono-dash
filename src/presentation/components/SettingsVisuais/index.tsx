import {
	SSettingsContainerVisuais,
	SSettingsFormVisuais,
	//SSettingsFormVisuaisTheme,
	SSettingsInputVisuais,
} from "presentation";
import { useColors } from "main";
//import { useState } from "react";
/* import sun from "../../assets/images/sunny.png";
import moon from "../../assets/images/moon.png"; */
export const SettingsVisuais = (): JSX.Element => {
	const {
		primaryColor,
		chartBarBGPrimaryColor,
		chartBarBorderPrimaryColor,
		chartBarBGSecondaryColor,
		chartBarBorderSecondaryColor,
		chartLineBGColor,
		chartLineBorderColor,
		secondaryBGColor,
		setChartLineBorderColor,
		setChartBarBGPrimaryColor,
		setChartBarBorderPrimaryColor,
		setChartBarBGSecondaryColor,
		setChartLineBGColor,
		setChartBarBorderSecondaryColor,
		//setSecondaryBGColor,
		//setPrimaryColor,
		saveColors,
	} = useColors();

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
					<label htmlFor="firstColor">Chart Line:</label>
					<SSettingsInputVisuais
						type="color"
						id="firstColor"
						name="firstColor"
						value={chartLineBGColor}
						onChange={(e): void => {
							setChartLineBGColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="secondColor">Chart Border:</label>
					<SSettingsInputVisuais
						id="secondColor"
						name="secondColor"
						type="color"
						value={chartLineBorderColor}
						onChange={(e): void => {
							setChartLineBorderColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="thirdColor">Primary Color</label>
					<SSettingsInputVisuais
						id="thirdColor"
						name="thirdColor"
						type="color"
						value={chartBarBGPrimaryColor}
						onChange={(e): void => {
							setChartBarBGPrimaryColor(e.target.value);
						}}
					/>
				</div>

				<div>
					<label htmlFor="lineColor">Primary Bar:</label>
					<SSettingsInputVisuais
						id="lineColor"
						name="lineColor"
						type="color"
						value={chartBarBorderPrimaryColor}
						onChange={(e): void => {
							setChartBarBorderPrimaryColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="lineColor">Secondary Color:</label>
					<SSettingsInputVisuais
						id="lineColor"
						name="lineColor"
						type="color"
						value={chartBarBGSecondaryColor}
						onChange={(e): void => {
							setChartBarBGSecondaryColor(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="lineColor">Secondary Bar:</label>
					<SSettingsInputVisuais
						id="lineColor"
						name="lineColor"
						type="color"
						value={chartBarBorderSecondaryColor}
						onChange={(e): void => {
							setChartBarBorderSecondaryColor(e.target.value);
						}}
					/>
				</div>
				<button
					onClick={saveColors}
					className="buttonSave"
				>
					save
				</button>
			</SSettingsFormVisuais>

			{/* <SSettingsFormVisuaisTheme
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
			</SSettingsFormVisuaisTheme> */}
		</SSettingsContainerVisuais>
	);
};
