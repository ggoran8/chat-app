import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = ({ setName }) => {
	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate('./chat');
	};

	return (
		<div className={styles.login_wrapper}>
			<div className={styles.login_box}>
				<div className={styles.chat_app}>Welcome to my chat app!</div>
				<div className={styles.enter_name}>Please enter your chat name</div>
				<form onSubmit={handleSubmit}>
					<input
						className={styles.input_box}
						type='text'
						placeholder='Your chat name..'
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<button className={styles.button} type='submit'>
						OK
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
