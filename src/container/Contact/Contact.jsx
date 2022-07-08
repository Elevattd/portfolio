import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { confirm, error } from '../../utils/alert';
import { AppWrap } from '../../wrapper';
import './Contact.scss';
import { validate } from './ContactValidate';

const Contact = () => {
	const [errors, setErrors] = useState({
		// user_name:
		// 	'El nombre debe contener de 4 a 20 caracteres y solo admite letras',
		// user_email: 'Introduzca un Email valido',
		// user_message: 'El mensaje debe contener de 10 a 255 caracteres',
	});
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
		setErrors(
			validate({ ...emailContent, [event.target.name]: event.target.value }),
		);
	};

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs
			.send(
				'service_rkd32or',
				'template_gge1gfi',
				emailContent,
				'1EGok5DWbsnlSd9el',
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
					{errors.user_name && <p className="app_form_p">{errors.user_name}</p>}
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
					{errors.user_email && (
						<p className="app_form_p">{errors.user_email}</p>
					)}
				</div>
				<div>
					<textarea
						className="p-text"
						placeholder="Mensaje..."
						value={emailContent.user_message}
						name="user_message"
						onChange={handleChange}
					/>
					{errors.user_message && (
						<p className="app_form_textarea">{errors.user_message}</p>
					)}
				</div>

				<button
					type="button"
					className="p-text"
					onClick={sendEmail}
					disabled={
						Object.keys(errors).length > 0 ||
						errors.user_email ||
						errors.user_name
							? true
							: false
					}
				>
					Enviar
				</button>
			</div>
		</>
	);
};

export default AppWrap(Contact, 'contacto');
