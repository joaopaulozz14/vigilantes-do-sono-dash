import * as S from "./styles";
import logo from "../../assets/images/vigilantes.png";
import { Home, Settings, Logout } from "presentation/assets/icons";
const SideBar = (): JSX.Element => {
	return (
		<S.Menu>
			<nav>
				<S.MenuLogo>
					<img
						src={logo}
						alt="Logo da empresa Vigilantes do Sono"
					/>
				</S.MenuLogo>
				<S.MenuItem>
					<div>
						<Home />
					</div>
				</S.MenuItem>
				<S.MenuItem>
					<div>
						<Settings />
					</div>
				</S.MenuItem>
			</nav>
			<S.MenuItemLogout>
				<Logout />
			</S.MenuItemLogout>
		</S.Menu>
	);
};

export default SideBar;
