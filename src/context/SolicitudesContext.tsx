import React, { createContext, useReducer } from 'react'
import { solicitudesReducer } from './solicitudesReducer';

import { ISolucitudes } from '../interface/ISolicitudes';

export const ADD_SOLICITUD = 'ADD_SOLICITUD';

export const solicitudesInitialState = {
	solicitudes: []
}

export const SolicitudesContext = createContext({} as any);

export const SolicitudesProvider = ({children}:any) => {

	const [solicitudesState, dispatch] = useReducer(solicitudesReducer, solicitudesInitialState)

	const getSolicitudes = (data : ISolucitudes) => {
		dispatch({ type: ADD_SOLICITUD, payload: data })
	}

	return(
		<SolicitudesContext.Provider value={{
			...solicitudesState,
			getSolicitudes
		}}>
			{children}
		</SolicitudesContext.Provider>
	)
}