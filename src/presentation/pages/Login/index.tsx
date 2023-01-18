import { Container } from "presentation/styles/Login";
export const Login = (): JSX.Element => {
	return (
		<Container>
			<div className="container">
				<h2>Login</h2>

				<form>
					<input
						type="nome"
						placeholder="Username"
					/>
					<input
						type="password"
						placeholder="Password"
					/>
					<input
						type="dataDeNascimento"
						placeholder="dataDeNascimento"
					/>
					<input
						type="local"
						placeholder="local"
					/>
					<input
						type="registro"
						placeholder="registro"
					/>
					<input
						type="buttom"
						className="btn"
						value="Save"
					/>
				</form>
				<p>
					Forgot your password<a href="#">Click Here</a>
				</p>
			</div>
		</Container>
	);
};
