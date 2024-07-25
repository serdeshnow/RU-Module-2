// Все остальное вроде бы Императивно написано...

import logo from "./logo.svg";
import "./App.css";
// import { createElement } from "react";
import { MyComponent } from "./MyComponent";
// Декларативный стиль - импорт файлов

export const App = () => {
	// const time = new Date();

	// 6. Responding on events & conditional rendering
	const onClick = () => {
		console.log(123);
	};

	return (
		<div className="App">
			<header className="App-header" onClick={onClick}>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* <p>Actual year: {time.getFullYear()}</p> */}
				{/* Декларативный стиль - получаем год, неважно, как он считается под капотом  */}
				{/* <MyComponent type="normal" value="123" /> */}
				<MyComponent />
			</header>
		</div>
	);
};
