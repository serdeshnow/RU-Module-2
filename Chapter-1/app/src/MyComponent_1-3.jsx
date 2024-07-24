import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";

const getValue = () => 123;
export const MyComponent = (props) => {
	//1
	const date = new Date();

	useEffect(() => {
		console.log(date);
	}, []);

	//2
	const tagName = "div";

	//3

	// const currentDate = new Date();
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);

	return (
		<Fragment>
			<div> {String(date)}</div>
			<div className={tagName + "Element"} style={{ marginTop: "40px", color: "red" }}>
				{getValue()}
			</div>
			<div>{currentDate.toISOString().substring(11, 19)}</div>
		</Fragment>
	);
	// to Return nothing from component: return null/undefined/true/false/"". null recommended.
};
