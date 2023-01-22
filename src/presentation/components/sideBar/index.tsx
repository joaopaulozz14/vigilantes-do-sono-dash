import * as S from "./styles";
import logo from "../../assets/images/vigilantes.png";
import { Home } from "presentation/assets/icons";
const SideBar = (): JSX.Element => {
	return (
		<S.Menu>
			<S.MenuLogo>
				<img
					src={logo}
					alt=""
				/>
			</S.MenuLogo>
			<S.MenuItem active={true}>
				<div>
					<Home />
				</div>
			</S.MenuItem>
		</S.Menu>
	);
};

export default SideBar;
