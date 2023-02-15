/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSwichers } from "main";
import { useState } from "react";
import { SUpperBar, SUpperBarButton } from "../../styles/Components/UpperBar";

export const UpperBar = (): JSX.Element => {
	const {
		switchAnxiety,
		switchDepression,
		switchGeneral,
		switchInsomnia,
		switchProductivity,
		switchRating,
		setSwitchAnxiety,
		setSwitchDepression,
		setSwitchGeneral,
		setSwitchInsomnia,
		setSwitchProductivity,
		setSwitchRating,
	} = useSwichers();

	const [active, setActive] = useState("");

	const handleActive = event => {
		setActive(event.target.id);
		console.log(active);

		return;
	};
	return (
		<SUpperBar>
			<aside className="container">
				<SUpperBarButton
					id={"1"}
					key={1}
					onClick={() => {
						handleActive;
						console.log("123");
						setSwitchGeneral(!switchGeneral);
					}}
					className={active === "1" ? "active" : undefined}
				>
					Barra de abrir o gráfico
				</SUpperBarButton>
				<SUpperBarButton
					className="ola"
					onClick={() => {
						handleActive;
						setSwitchAnxiety(!switchAnxiety);
					}}
				>
					Barra de abrir o gráfico de ansiedade
				</SUpperBarButton>
				<SUpperBarButton
					className={"3"}
					onClick={() => {
						handleActive;
						setSwitchDepression(!switchDepression);
					}}
				>
					Barra de abrir o gráfico de depressão
				</SUpperBarButton>
				<SUpperBarButton
					className={"4"}
					onClick={() => {
						setSwitchInsomnia(!switchInsomnia);
					}}
				>
					Barra de abrir o gráfico de insonia
				</SUpperBarButton>
				<SUpperBarButton
					className={"5"}
					onClick={() => {
						setSwitchProductivity(!switchProductivity);
					}}
				>
					Barra de abrir o gráfico de produtividade
				</SUpperBarButton>
				<SUpperBarButton
					className={"6"}
					onClick={() => {
						setSwitchRating(!switchRating);
					}}
				>
					Barra de abrir o gráfico de avaliações
				</SUpperBarButton>
			</aside>
		</SUpperBar>
	);
};
