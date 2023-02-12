/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSwichers } from "main";
import { SUpperBar } from "../../styles/Components/UpperBar";

export const UpperBar = (): JSX.Element => {
	const { switchGeneral, setSwitchGeneral } = useSwichers();

	return (
		<SUpperBar>
			<aside className="container">
				<div
					onClick={() => {
						setSwitchGeneral(!switchGeneral);
					}}
				>
					Barra de abrir o gráfico de gerais
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</aside>
		</SUpperBar>
	);
};
