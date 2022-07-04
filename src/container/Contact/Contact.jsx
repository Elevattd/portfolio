import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { confirm, error } from '../../utils/alert';
import { AppWrap } from '../../wrapper';
import './Contact.scss';

const Contact = () => {
	const [emailContent, setEmailContent] = useState({
		user_name: '',
		user_email: '',
		user_message: '',
	});

	const handleChange = (event) => {
		setEmailContent((emailContent) => ({
			...emailContent,
			[event.target.name]: event.target.value,
		}));
	};

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs
			.send(
				'service_8j0o499',
				'template_80gpbps',
				emailContent,
				'93vOhvwIb4VePXwvu',
			)
			.then((result) => (result.status === 200 ? confirm() : error()))
			.catch((error) => console.log(error));
		setEmailContent({
			user_name: '',
			user_email: '',
			user_message: '',
		});
	};

	return (
		<>
			<h2 className="head-text">Contactame!</h2>
			<div className="app__footer-form app__flex">
				<div className="app__flex">
					<input
						className="p-text"
						placeholder="Introduce tu nombre..."
						type="text"
						name="user_name"
						value={emailContent.user_name}
						onChange={handleChange}
					/>
				</div>
				<div className="app__flex">
					<input
						className="p-text"
						placeholder="Introduce tu email..."
						type="email"
						name="user_email"
						value={emailContent.user_email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<textarea
						className="p-text"
						placeholder="Mensaje..."
						value={emailContent.user_message}
						name="user_message"
						onChange={handleChange}
					/>
				</div>
				<button type="button" className="p-text" onClick={sendEmail}>
					Enviar
				</button>
			</div>
		</>
	);
};

export default AppWrap(Contact, 'contacto');
