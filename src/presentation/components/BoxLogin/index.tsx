import {
	SBoxLogin,
	SBoxLoginLogo,
} from "presentation/styles/Components/BoxLogin";
import { useState } from "react";
import Input from "../Input";
import logo from "../../assets/images/vigilantes.png";
const BoxLogin = (): JSX.Element => {
	const [valueName, setValueName] = useState("");
	const [valuePassword, setValuePassword] = useState("");

	const list = valueName;
	const listPass = valuePassword;
	return (
		<SBoxLogin>
			<SBoxLoginLogo>
				<img
					src={logo}
					alt=""
				/>
				<h2>Vigilantes do Sono</h2>
			</SBoxLoginLogo>

			<form>
				<Input
					label="E-mail"
					type="text"
					value={setValueName}
				/>
				<Input
					label="Senha"
					type="password"
					value={setValuePassword}
				/>
				<div>{list}</div>
				<div>{listPass}</div>
			</form>
			<p>
				Forgot your password<a href="#">Click Here</a>
			</p>
		</SBoxLogin>
	);
};

export default BoxLogin;
