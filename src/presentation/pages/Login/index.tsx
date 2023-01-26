import { SLoginContainer } from "presentation";
import Input from "presentation/components/Input";
import { useState } from "react";
export const Login = (): JSX.Element => {
	const [valueName, setValueName] = useState("");
	const [valuePassword, setValuePassword] = useState("");
	return (
		<SLoginContainer>
			<div className="container">
				<h2>Login</h2>

				<form>
					<Input
						label="name"
						placeholder="Username"
						type="text"
						value={setValueName}
					/>
					<Input
						label="password"
						placeholder="Password"
						type="password"
						value={setValuePassword}
					/>
				</form>
				<p>
					Forgot your password<a href="#">Click Here</a>
				</p>
			</div>
		</SLoginContainer>
	);
};
