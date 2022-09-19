import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

import { useNavigation } from '@react-navigation/native';
import { ISolucitudes } from '../interface/ISolicitudes'
import { validateCadena } from '../utils';

type Props = {
	item: ISolucitudes;
}

type navigationProp = StackNavigationProp<RootStackParams>;

export const Solicitudes = ({item}: Props) => {

	const navigation = useNavigation<navigationProp>();
	
	const { cliente, email } = item;

	const handleNavigate = () => navigation.navigate('DetailScreen' as any, item )
	
	return (
		<View style={ styles.container }>
			<Text style={ styles.txt }>{ validateCadena(cliente) } - { validateCadena(email) }</Text>
			<TouchableOpacity 
				style={ styles.btn } 
				onPress={ handleNavigate }
			>
				<Text style={ styles.btnTxt }>Ir detalle</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{ 
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	txt:{
		fontSize: 20,
		color: 'black',
		marginRight: 10,
		marginBottom: 10
	},
	btn:{
		backgroundColor: 'black',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10
	},
	btnTxt:{
		fontSize: 20, 
		padding: 10, 
		color:'white'
	}
})