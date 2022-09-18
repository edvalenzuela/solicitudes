import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/theme';
import { RootStackParams } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.mainMargin}>

			<View>
				<TouchableOpacity
					activeOpacity={0.5}
					style={styles.btnBig}
					onPress={() => navigation.navigate('DetailScreen')}
				>
					<Text style={styles.btnColorTxt}>Ir a detalle</Text>
				</TouchableOpacity>
			</View>
    </View>
  );
};
