import logo from "./assets/logo.svg";
import styles from "./App.module.css";
import { User, Label } from "./components";

const getUserFromServer = () => ({
	name: "Ivan",
	age: 24,
	email: "ivan@mail.ru",
	phone: "8800-555-35-35",
});

function App() {
	const user = getUserFromServer();

	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}>
				<img src={logo} className={styles.AppLogo} alt="logo" />
				<Label color={"red"}>Приложение:</Label>
				<div>Разная информация приложения</div>
				<User {...user} />
			</header>
		</div>
	);
}

export default App;
