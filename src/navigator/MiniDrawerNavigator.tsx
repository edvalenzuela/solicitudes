import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/theme';

export const MiniDrawerNavigator = ({navigation}: DrawerContentComponentProps) => {

	return (
		<DrawerContentScrollView
			contentContainerStyle={{
				justifyContent: 'center',
				flex: 1
			}}
		>
			<View style={styles.imgContainer}>
				<Image 
					source={ require('../assets/img/pervasivemind.png') }
					style={styles.avatar} 
					/>
			</View>

			<View style={styles.containerProfile}>
				<Icon name="settings-outline" size={30} color="white" />
				<Text style={styles.textProfile}> 
					Eduardo Valenzuela &copy;
				</Text>
				<Text style={styles.textProfile}>
					Test Challenge 
				</Text>
				<TouchableOpacity onPress={ () => navigation.navigate('HomeScreen')}>
					<Text style={{
						...styles.textProfile, 
						...styles.btnDefault
						}}
					>
						Volver
					</Text>
				</TouchableOpacity>
			</View>
    </DrawerContentScrollView>
	);
}