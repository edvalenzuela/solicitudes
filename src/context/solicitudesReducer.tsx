import { ADD_SOLICITUD } from './SolicitudesContext';

export const solicitudesReducer = (state: any, action: any) => {

	switch (action.type) {
		case ADD_SOLICITUD:
			return{
					...state,
					solicitudes: [...state.solicitudes, action.payload]
			};
	
		default:
			return state;
	}
}