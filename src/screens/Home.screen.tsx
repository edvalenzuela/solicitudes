import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/theme';
import { RootStackParams } from '../navigator/StackNavigator';

import { Formulario } from '../components/Formulario';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export const HomeScreen = ({navigation}:Props) => {

	const [isShowModal, setIsShowModal] = useState(false);

  return (
    <View style={{...styles.mainMargin, flex: 1, alignItems:'center', justifyContent: 'center'}}>
			<Text style={{ marginBottom: 30, fontSize: 20, color: 'black', fontWeight: '600' }}>
				Creación de solicitudesAPP
			</Text>
			<TouchableOpacity 
				style={stylesHome.btnHome}
				onPress={() => setIsShowModal(!isShowModal)}>
				<Text style={stylesHome.txtHome}>Nueva solicitud</Text>
				<Icon name="add-circle-outline" size={50} color="white" />
			</TouchableOpacity>
			<Formulario isShowModal={isShowModal} setIsShowModal={setIsShowModal} />			
    </View>
  );
};

const stylesHome = StyleSheet.create({
	btnHome:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'blue',
		borderRadius: 10,
		width: '80%',
		paddingHorizontal: 30,
		paddingVertical: 15,
	},
	txtHome: {
		color: 'white',
		fontSize: 26
	}
})
