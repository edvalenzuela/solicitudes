
export const formatDate = (fecha = '') => {
	const dateFormat = new Date(fecha);

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}

	return dateFormat.toLocaleDateString('es-ES', options);
}

export const validateCadena = (txt = '') => {
	if(txt.length > 10){
		return txt.substring(0, 10) + '...';
	}
	return txt;
}

