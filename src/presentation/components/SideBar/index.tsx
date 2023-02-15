import logo from "../../assets/images/vigilantes.png";
import {
	Home,
	Settings,
	Logout,
	SMenuItem,
	SMenuItemLogout,
	SMenuLogo,
	SSideMenu,
} from "presentation";
import { RoutePath } from "@types";
import { useNavigate } from "react-router-dom";

export const SideBar = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<SSideMenu>
			<nav>
				<SMenuLogo>
					<img
						src={logo}
						alt="Logo da empresa Vigilantes do Sono"
					/>
				</SMenuLogo>
				<SMenuItem onClick={(): void => navigate(RoutePath.HOME)}>
					<div>
						<Home />
					</div>
				</SMenuItem>
				<SMenuItem
					onClick={(): void => {
						navigate(RoutePath.SETTINGS);
					}}
				>
					<div>
						<Settings />
					</div>
				</SMenuItem>
			</nav>
			<SMenuItemLogout
				onClick={(): void => {
					navigate(RoutePath.LOGIN);
				}}
			>
				<Logout />
			</SMenuItemLogout>
		</SSideMenu>
	);
};
