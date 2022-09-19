import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/theme';

import { StackScreenProps } from '@react-navigation/stack';
import { Clientes } from '../components/Formulario';
import { SolicitudesContext } from '../context/SolicitudesContext';

/* interface RouterParams{
	data: Clientes[]
} */

interface Props extends StackScreenProps<any, any>{};

export const SolicitudesScreen = ({route}: Props) => {

	//const params = route.params as RouterParams;
	//console.log(params)

	const { solicitudesState } = useContext(SolicitudesContext);

	return (
		<View style={styles.mainMargin}>
			<Text>{
				JSON.stringify(solicitudesState)}
			</Text>
		</View>
	)
}
