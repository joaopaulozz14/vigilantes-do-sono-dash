import { AllProvidersProps, ColorsProviderData, IMutableColors } from "@types";
import { theme } from "presentation";
import { createContext, useContext, useEffect, useState } from "react";

const ColorsContext = createContext<ColorsProviderData>(
	{} as ColorsProviderData,
);
export const ColorsProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const [primaryBGColor, setPrimaryBGColor] = useState(
		theme.colors.baseBg1Dark,
	);
	const [secondaryBGColor, setSecondaryBGColor] = useState(
		theme.colors.baseBg2Dark,
	);

	const [primaryColor, setPrimaryColor] = useState(theme.colors.primaryColor);
	const [secondaryColor, setSecondaryColor] = useState(
		theme.colors.secondaryColor,
	);

	const [chartLineBGColor, setChartLineBGColor] = useState(
		theme.colors.primaryBGChartColor,
	);
	const [chartLineBorderColor, setChartLineBorderColor] = useState(
		theme.colors.primaryBorderChartColor,
	);

	const [chartBarBGPrimaryColor, setChartBarBGPrimaryColor] = useState(
		theme.colors.secondaryBGChartColor,
	);
	const [chartBarBorderPrimaryColor, setChartBarBorderPrimaryColor] =
		useState(theme.colors.secondaryBorderChartColor);

	const [chartBarBGSecondaryColor, setChartBarBGSecondaryColor] = useState(
		theme.colors.thirdBGChartColor,
	);
	const [chartBarBorderSecondaryColor, setChartBarBorderSecondaryColor] =
		useState(theme.colors.thirdBorderChartColor);

	const saveColors = (): void => {
		const colors: IMutableColors = {
			primaryColor,
			secondaryColor,
			primaryBGColor,
			secondaryBGColor,
			chartLineBGColor,
			chartLineBorderColor,
			chartBarBGPrimaryColor,
			chartBarBorderPrimaryColor,
			chartBarBGSecondaryColor,
			chartBarBorderSecondaryColor,
		};
		localStorage.setItem("colors", JSON.stringify(colors));
	};

	const applyColors = (): void => {
		const isLocaColors = localStorage.getItem("colors") || "";
		if (isLocaColors) {
			const colors: IMutableColors = JSON.parse(
				localStorage.getItem("colors") || "",
			);
			setPrimaryColor(colors.primaryColor);
			setSecondaryColor(colors.secondaryColor);
			setPrimaryBGColor(colors.primaryBGColor);
			setSecondaryBGColor(colors.secondaryBGColor);
			setChartLineBGColor(colors.chartLineBGColor);
			setChartLineBorderColor(colors.chartLineBorderColor);
			setChartBarBGPrimaryColor(colors.chartBarBGPrimaryColor);
			setChartBarBorderPrimaryColor(colors.chartBarBorderPrimaryColor);
			setChartBarBGSecondaryColor(colors.chartBarBGSecondaryColor);
			setChartBarBorderSecondaryColor(
				colors.chartBarBorderSecondaryColor,
			);
		}
	};

	useEffect(() => {
		applyColors();
	}, []);

	return (
		<ColorsContext.Provider
			value={{
				primaryColor,
				secondaryColor,
				primaryBGColor,
				secondaryBGColor,
				chartLineBGColor,
				chartLineBorderColor,
				chartBarBGPrimaryColor,
				chartBarBorderPrimaryColor,
				chartBarBGSecondaryColor,
				chartBarBorderSecondaryColor,
				setPrimaryColor,
				setSecondaryColor,
				setPrimaryBGColor,
				setSecondaryBGColor,
				setChartLineBGColor,
				setChartLineBorderColor,
				setChartBarBGPrimaryColor,
				setChartBarBorderPrimaryColor,
				setChartBarBGSecondaryColor,
				setChartBarBorderSecondaryColor,
				saveColors,
			}}
		>
			{children}
		</ColorsContext.Provider>
	);
};

export const useColors = (): ColorsProviderData => useContext(ColorsContext);
