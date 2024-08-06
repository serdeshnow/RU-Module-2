import styles from "./user.module.css";
import { Label } from "../label/label";

export const User = ({ name, age, email, phone }) => {
	return (
		<div className={styles.user}>
			<Label color={"green"}>Пользователь:</Label>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<div>
				<Label color={"blue"}>Контакты:</Label>
				<div>Почта: {email}</div>
				<div>Телефон: {phone}</div>
			</div>
		</div>
	);
};
