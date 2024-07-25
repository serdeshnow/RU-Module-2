import styles from "./styles/app.module.css";
import data from "./data.json";
import { useState } from "react";

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(1);
	// console.log(steps);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	const onPrevClick = () => {
		console.log("prev clicked");
		setActiveIndex(activeIndex - 1);
	};

	const onNextClick = () => {
		console.log("next clicked");

		setActiveIndex(activeIndex + 1);
	};

	const onRepeatClick = () => {
		console.log("repeat clicked");
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	let isFirstStep = activeIndex === 0;
	let isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]} key={steps[activeIndex].id}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{data &&
							data.map((item, index) => (
								<>
									<li
										className={
											styles["steps-item"] +
											(activeIndex + 1 === Number(item.id)
												? " " + styles.active
												: "") +
											(activeIndex + 1 > Number(item.id)
												? " " + styles.done
												: "")
										}
										key={Number(item.id)}
									>
										<button
											className={styles["steps-item-button"]}
											onClick={() => setActiveIndex(Number(item.id) - 1)}
										>
											{index + 1}
										</button>
										{item.title}
									</li>
								</>
							))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={onPrevClick}
							disabled={isFirstStep}
						>
							Назад
						</button>
						{!isLastStep ? (
							<button className={styles.button} onClick={onNextClick}>
								Далее
							</button>
						) : (
							<button className={styles.button} onClick={onRepeatClick}>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
