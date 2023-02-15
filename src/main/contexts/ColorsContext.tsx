import { AllProvidersProps, ColorsProviderData, IMutableColors } from "@types";
import { createContext, useContext, useEffect, useState } from "react";

const ColorsContext = createContext<ColorsProviderData>(
	{} as ColorsProviderData,
);
export const ColorsProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const [primaryBGColor, setPrimaryBGColor] = useState("#0f0925");
	const [secondaryBGColor, setSecondaryBGColor] = useState("#423869");

	const [primaryColor, setPrimaryColor] = useState("#7acdf3");
	const [secondaryColor, setSecondaryColor] = useState("#190321");

	const [chartLineBGColor, setChartLineBGColor] = useState("#6cffeb");
	const [chartLineBorderColor, setChartLineBorderColor] = useState("#bbb7d1");

	const [chartBarBGPrimaryColor, setChartBarBGPrimaryColor] =
		useState("#b1f89f");
	const [chartBarBorderPrimaryColor, setChartBarBorderPrimaryColor] =
		useState("#a9fde8");

	const [chartBarBGSecondaryColor, setChartBarBGSecondaryColor] =
		useState("#92f3e3");
	const [chartBarBorderSecondaryColor, setChartBarBorderSecondaryColor] =
		useState("#00b7ff");

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
