import { SLoginContainer, SLogin } from "presentation";
import BoxLogin from "presentation/components/BoxLogin";
export const Login = (): JSX.Element => {
	return (
		<SLogin>
			<SLoginContainer>
				<BoxLogin />
			</SLoginContainer>
		</SLogin>
	);
};
