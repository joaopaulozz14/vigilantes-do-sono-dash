import { useColors, useSwichers } from "main";
import { SUpperBar, SUpperBarButton } from "../../styles/Components/UpperBar";
import { Item } from "@types";

export const UpperBar = (): JSX.Element => {
	const {
		switchAnxiety,
		switchDepression,
		switchGeneral,
		switchInsomnia,
		switchProductivity,
		switchRating,
		arrayCharts,
		setSwitchAnxiety,
		setSwitchDepression,
		setSwitchGeneral,
		setSwitchInsomnia,
		setSwitchProductivity,
		setSwitchRating,
		setArrayCharts,
	} = useSwichers();

	const { buttonsPrimaryColor } = useColors();

	/* const [state, setState] = useState<AppState>({
		items: [],
	}); */

	const addItem = (name: string): void => {
		const newItem: Item = {
			id: arrayCharts.items.length + 1,
			name: `${name}`,
		};
		setArrayCharts({ items: [...arrayCharts.items, newItem] });
	};

	const removeItem = (name: string): void => {
		const updatedItems = arrayCharts.items.filter(item => {
			return item.name !== name;
		});
		setArrayCharts(prevState => ({
			...prevState,
			items: updatedItems,
		}));
	};

	const draggables = document.querySelectorAll(
		".draggable",
	) as NodeListOf<HTMLElement>;

	draggables.forEach(draggable => {
		draggable.addEventListener("dragstart", () => {
			draggable.classList.add("dragging");
		});
		draggable.addEventListener("dragend", () => {
			draggable.classList.remove("dragging");
		});
	});

	const container = document.getElementById("container-aside") as HTMLElement;

	if (container) {
		container.addEventListener("dragover", (e: DragEvent) => {
			e.preventDefault();
			const afterElement = getDragAfterElements(container, e.clientY);

			const draggable = document.querySelector(
				".dragging",
			) as HTMLElement;
			if (afterElement == null) {
				container.appendChild(draggable);
			} else {
				console.log("fkmesalç");
			}
		});
	}

	function getDragAfterElements(
		container: Element,
		x: number,
	): Element | null {
		const draggableElements = container.querySelectorAll(
			".draggable:not(.dragging)",
		);

		let closestElement: Element | null = null;
		let closestOffset = Number.NEGATIVE_INFINITY;

		draggableElements.forEach(draggableElement => {
			const box = draggableElement.getBoundingClientRect();
			const offset = x - box.top - box.height / 2;
			console.log(box);
			if (offset > 0 && offset > closestOffset) {
				closestElement = draggableElement;
				closestOffset = offset;
			}
		});
		//console.log(closestElement);
		return closestElement;
	}

	return (
		<SUpperBar id="container">
			<aside id="container-aside">
				<SUpperBarButton
					isActive={switchGeneral}
					isActiveColor={buttonsPrimaryColor}
					onClick={(): void => {
						setSwitchGeneral(!switchGeneral);
						switchGeneral ? removeItem("item1") : addItem("item1");
					}}
					className="draggable"
					draggable="true"
				>
					APP
				</SUpperBarButton>

				<SUpperBarButton
					isActive={switchAnxiety}
					isActiveColor={buttonsPrimaryColor}
					id="item2"
					onClick={(): void => {
						setSwitchAnxiety(!switchAnxiety);
						switchAnxiety ? removeItem("item2") : addItem("item2");
					}}
					className="draggable"
					draggable="true"
				>
					GAD
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchDepression}
					isActiveColor={buttonsPrimaryColor}
					id="item3"
					onClick={(): void => {
						setSwitchDepression(!switchDepression);
						switchDepression
							? removeItem("item3")
							: addItem("item3");
					}}
					className="draggable"
					draggable="true"
				>
					PHQ
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchInsomnia}
					isActiveColor={buttonsPrimaryColor}
					id="item4"
					onClick={(): void => {
						setSwitchInsomnia(!switchInsomnia);
						switchInsomnia ? removeItem("item4") : addItem("item4");
					}}
					draggable="true"
					className="draggable"
				>
					ISI
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchProductivity}
					isActiveColor={buttonsPrimaryColor}
					id="item5"
					onClick={(): void => {
						setSwitchProductivity(!switchProductivity);
						switchProductivity
							? removeItem("item5")
							: addItem("item5");
					}}
					className="draggable"
					draggable="true"
				>
					Produtividade
				</SUpperBarButton>
				<SUpperBarButton
					isActive={switchRating}
					isActiveColor={buttonsPrimaryColor}
					id="item6"
					onClick={(): void => {
						setSwitchRating(!switchRating);
						switchRating ? removeItem("item6") : addItem("item6");
					}}
					className="draggable"
					draggable="true"
				>
					Avaliações
				</SUpperBarButton>
			</aside>
		</SUpperBar>
	);
};
