import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { styles } from '../theme/theme';
import { StackScreenProps } from '@react-navigation/stack';
import { formatDate } from '../utils';

import { ErrorMessage } from '../components/ErrorMessage';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{};

export const DetailsScreen = ({route} : Props) => {

	const params = route.params || '';

	const { cliente, email, description, date, 
		isSupport,
		isRetiro,
		isOther, } = params as any;

  return (
    <View style={{
			...styles.mainMargin, 
			...styles.centerMain, 
			alignItems: 'flex-start',
			padding: 20,
		}}>
      {
				Object.keys(params).length === 0 ? (
					<ErrorMessage message='No hay detalle !!!
					debe seleccionar una solicitud' />
				):
				(<>
					<View style={{
						flexDirection: 'row',
						width:'100%',
						justifyContent:'space-between',
						alignItems:'center',
						paddingVertical: 20
					}}>
						<Text style={{
							color: 'black', 
							fontSize: 28,
							fontWeight: 'bold'
						}}>Detalle de solicitud</Text>
						<Icon name="reader-outline" size={50} color="black" />
					</View>

					<View>
						<Text style={stylesDetail.label}>Nombre : { cliente }</Text>
					</View>
					<View>
						<Text style={stylesDetail.label}>Email : { email }</Text>
					</View>
					<View>
						<Text style={stylesDetail.label}>Descripción : { description }</Text>
					</View>
					<View>
						<Text style={stylesDetail.label}>Fecha : {formatDate(date)}</Text>
					</View>

					<View>
						<Text style={stylesDetail.label}>Tipo solicitud : </Text>
						<Text style={stylesDetail.labelTipo}>{isSupport ? 'Soporte ok' : 'Sin tipo soporte'} </Text>
						<Text style={stylesDetail.labelTipo}>{isRetiro ? 'Retiro ok' : 'Sin tipo retiro'} </Text>
						<Text style={stylesDetail.labelTipo}>{isOther ? 'Otro ok' : 'Sin tipo otro'} </Text>
					</View>
				</>)
			}
    </View>
  );
};

const stylesDetail = StyleSheet.create({
	label:{
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10
	},
	labelTipo:{
		fontSize:16, 
		color: 'black', 
		marginLeft: 20
	}
})
