import styles from "./styles/app.module.css";
import { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	let isValueValid = value.length < 3 ? false : true;

	const onInputButtonClick = () => {
		const promptValue = prompt();
		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError("");
		} else {
			setError(
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>,
			);
		}
	};

	const onAddButtonClick = () => {
		if (value.length >= 3) {
			const createdTime = new Date();
			const updatedList = [
				...list,
				{
					id: Date.now(),
					value: `${value} - ${createdTime.toString().substring(3, 24)}`,
				},
			];
			setList(updatedList);
			setValue("");
			setError("");
		}
		console.log(list);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: "
				<output className={styles["current-value"]}>{value}</output>"
			</p>
			{error !== "" && error}
			<div className={styles["button-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>

				<ul className={styles.list}>
					{list.length !== 0 ? (
						list.map(({ id, value }) => (
							<li className={styles["list-item"]} key={id}>
								{value}
							</li>
						))
					) : (
						<p className={styles["no-margin-text"]}>
							Нет добавленных элементов
						</p>
					)}
				</ul>
			</div>
		</div>
	);
}

export default App;
