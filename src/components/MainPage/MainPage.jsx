import Messages from '../messages/Messages';
import Input from '../input/Input';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../header/Header';

const MainPage = ({ name }) => {
	const [drone, setDrone] = useState();
	const [messages, setMessages] = useState([]);

	const [user, setUser] = useState({
		username: name,
		color: getRandomColor(),
	});

	function getRandomColor() {
		return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
	}

	useEffect(() => {
		const drone = new window.Scaledrone('Qq7xOdnH3ZGcDcTt', {
			data: user,
		});
		setDrone(drone);
	}, []);

	useEffect(() => {
		if (drone) {
			const room = drone.subscribe('observable-room');

			drone.on('open', (error) => {
				if (error) {
					return console.error(error);
				}

				setUser({ ...user, id: drone.clientId });

				room.on('data', (data, member) => {
					const timestamp = new Date();
					setMessages((oldArray) => [
						...oldArray,
						{ member, text: data, timestamp },
					]);
				});
			});
		}
	}, [drone]);

	const onSendMessage = (message) => {
		if (message) {
			drone.publish({
				room: 'observable-room',
				message,
			});
		}
	};

	return (
		<>
			<div className='App'>
				<Header />

				<Messages messages={messages} currentMember={user} />

				<Input onSendMessage={onSendMessage} />
			</div>
		</>
	);
};

export default MainPage;
