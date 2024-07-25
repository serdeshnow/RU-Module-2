import { useState } from "react";

export const MyComponent = () => {
	const [value, setValue] = useState(0);

	// result: + 1
	const onClick = (event) => {
		setValue(value + 1);
		setValue(value + 1);
		setValue(value + 1);
		// console.log(event);
	};

	// if you want to change value few times in a row:

	// result : + 3
	const onClickThree = (event) => {
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
	};

	// conditional rendering

	const [showText, setShowText] = useState(true);

	const visibilityOnClick = () => {
		setShowText(!showText);
	};

	const text = <div>Some Text</div>;

	return (
		<>
			<div>{value}</div>
			<button onClick={onClick}>Прибавить +1</button>

			{showText && text}
			<button onClick={visibilityOnClick}>{showText ? "Hide" : "Show"} text</button>
		</>
	);
};
