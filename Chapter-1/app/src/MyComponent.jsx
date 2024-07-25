import { useState } from "react";
import styles from "./MyComponent.module.css";

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(true);

	const OnClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.white : styles.red}>Some Text</div>;

	return (
		<>
			{text}
			<button onClick={OnClick}>
				Change text style to {showRedText ? "RED" : "WHITE"}
			</button>
		</>
	);
};
