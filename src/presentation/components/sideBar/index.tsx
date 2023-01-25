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

const SideBar = (): JSX.Element => {
	return (
		<SSideMenu>
			<nav>
				<SMenuLogo>
					<img
						src={logo}
						alt="Logo da empresa Vigilantes do Sono"
					/>
				</SMenuLogo>
				<SMenuItem>
					<div>
						<Home />
					</div>
				</SMenuItem>
				<SMenuItem>
					<div>
						<Settings />
					</div>
				</SMenuItem>
			</nav>
			<SMenuItemLogout>
				<Logout />
			</SMenuItemLogout>
		</SSideMenu>
	);
};

export default SideBar;
