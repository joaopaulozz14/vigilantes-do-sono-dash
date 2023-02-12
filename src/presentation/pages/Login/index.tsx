import { SLoginContainer, SLogin } from "presentation";
import { BoxLogin } from "presentation";
import { useNavigate } from "react-router";
const Login = (): JSX.Element => {
	const navigate = useNavigate();
	const handleSubmit = (): void => {
		navigate("/");
	};
	return (
		<SLogin>
			<SLoginContainer>
				<BoxLogin onSubmitData={handleSubmit} />
			</SLoginContainer>
		</SLogin>
	);
};

export default Login;
