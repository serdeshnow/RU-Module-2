// Все остальное вроде бы Императивно написано...

import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";
// Декларативный стиль - импорт файлов

export const App = () => {
	const time = new Date();

	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", { className: "App-logo", src: logo, alt: "logo" }),
			createElement(
				"p",
				{},
				"Edit ",
				createElement("code", {}, `src/App.js`),
				" and save to reload2.",
			),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React",
			),
			createElement("p", {}, "Actual year: ", time.getFullYear()),
		),
	);

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload2.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>Actual year: {time.getFullYear()}</p>
	// 			{/* Декларативный стиль - получаем год, неважно, как он считается под капотом  */}
	// 		</header>
	// 	</div>,
	// );
};
