const validate = (input) => {
	let error = {};
	////////////////////// NAME //////////////////////////
	if (
		!input.user_name.match(
			/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
		)
	) {
		error.user_name =
			'El nombre debe contener de 4 a 20 caracteres y solo admite letras';
	}
	if (input.user_name.length < 4) {
		error.user_name =
			'El nombre debe contener de 4 a 20 caracteres y solo admite letras';
	}
	if (input.user_name.length > 20) {
		error.user_name =
			'El nombre debe contener de 4 a 20 caracteres y solo admite letras';
	}
	//////////////////// EMAIL //////////////////////////
	if (
		!input.user_email.match(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		)
	) {
		error.user_email = 'Introduzca un Email valido';
	}
	/////////////////// MESSAGE //////////////////////////
	if (input.user_message.length < 10) {
		error.user_message = 'El mensaje debe contener de 10 a 255 caracteres';
	}
	if (input.user_message.length > 255) {
		error.user_message = 'El mensaje debe contener de 10 a 255 caracteres';
	}
	return error;
};

export { validate };
