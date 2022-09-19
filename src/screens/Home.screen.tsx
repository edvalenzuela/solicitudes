import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/theme';
import { RootStackParams } from '../navigator/StackNavigator';

import { Formulario } from '../components/Formulario';


interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export const HomeScreen = ({navigation}:Props) => {

	const [isShowModal, setIsShowModal] = useState(false);

  return (
    <View style={{...styles.mainMargin, flex: 1}}>
			<TouchableOpacity onPress={() => setIsShowModal(!isShowModal)}>
				<Text>Nueva solicitud</Text>
			</TouchableOpacity>
			<Formulario isShowModal={isShowModal} setIsShowModal={setIsShowModal} />			
    </View>
  );
};
