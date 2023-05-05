import { SOverlay } from "presentation/styles/Components/Overlay";
import React from "react";

export type OverlayProps = {
	children: React.ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ children }) => {
	return <SOverlay>{children}</SOverlay>;
};

export default Overlay;
