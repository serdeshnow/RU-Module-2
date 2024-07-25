import logo from "./logo.svg";
import styles from "./App.module.css";
import { MyComponent } from "./MyComponent";

// CSS modules creates unique hash
// CSS styled-components - CSS-in-JS
// Tailwind - atomic CSS

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt="logo" />
				<p>Learn React</p>
				<MyComponent />
			</header>
		</div>
	);
};
