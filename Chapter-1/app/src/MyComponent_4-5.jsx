import { useState } from "react";

const getTimeFromDate = (date) => {
	return date.toISOString().substring(11, 19);
};

export const MyComponent = (props) => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);

	// 4. immutability and consistency
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

	if (obj.a === 10) {
		setObj({ ...obj, a: 20 });
	}

	// 5. Array rendering

	const products = [
		{ id: "qwe", name: "teapot" },
		{ id: "rty", name: "iron" },
	];

	return (
		<>
			<div>{getTimeFromDate(currentDate)}</div>
			<div>{obj.a}</div>
			<ul>
				{products.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</>
	);
};
