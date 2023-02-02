import {
	SBoxLogin,
	SBoxLoginLogo,
	SBoxLoginButton,
} from "presentation/styles/Components/BoxLogin";
import { useState } from "react";
import Input from "../Input";
import logo from "../../assets/images/vigilantes.png";

interface BoxLoginProps {
	onSubmitData: (data: { valueEmail: string; valuePassword: string }) => void;
}
const BoxLogin = ({ onSubmitData }: BoxLoginProps): JSX.Element => {
	const [valueEmail, setValueEmail] = useState("");
	const [valuePassword, setValuePassword] = useState("");

	const handleLogin = (): void => {
		const data = { valueEmail, valuePassword };
		if (data.valueEmail === "" || data.valuePassword === "") {
			return console.log("Digite senha e e-mail ");
		}
		onSubmitData(data);
	};
	return (
		<SBoxLogin>
			<SBoxLoginLogo>
				<img
					src={logo}
					alt="Logo Vigilantes do Sono"
				/>
				<h2>Vigilantes do Sono</h2>
			</SBoxLoginLogo>

			<form onSubmit={handleLogin}>
				<Input
					label="E-mail"
					type="text"
					value={setValueEmail}
				/>
				<Input
					label="Senha"
					type="password"
					value={setValuePassword}
				/>
				<SBoxLoginButton type="submit">Enviar</SBoxLoginButton>
			</form>
			<p>
				Forgot your password? <a href="#">Click Here</a>
			</p>
		</SBoxLogin>
	);
};

export default BoxLogin;
