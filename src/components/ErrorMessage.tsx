import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/theme';

type Props = {
	message: string
}

export const ErrorMessage = ({message = ''}: Props) => {
	return (
		<View style={{ 
			flexDirection: 'row',
			paddingHorizontal: 30, 
			alignItems:'center'
		}}>
			<Text style={{...styles.txtError, 
				color:'black', 
				backgroundColor: 'white',
				marginRight: 20
			}}>{ message }</Text>
			<Icon name="sad-outline" size={50} color="black" />
		</View>
	)
}