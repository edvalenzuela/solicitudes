import { useState } from 'react'

export const useForm = <T extends Object>(init: T) => {

	const [formulario, setFormulario] = useState(init);

	const onChange = <K extends Object>(value: K, campo: keyof T) => {
		setFormulario({
			...formulario,
			[campo]: value
		})
	}

	const resetForm = () => {
		setFormulario(init)
	}

	return{
		...formulario,
		formulario,
		onChange,
		resetForm
	}

}