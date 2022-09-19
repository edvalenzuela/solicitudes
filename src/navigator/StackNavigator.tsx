import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home.screen';
import { DetailsScreen } from '../screens/Details.screen';
import { SolicitudesScreen } from '../screens/Solicitudes.screen';
import { Clientes } from '../components/Formulario';

export type RootStackParams = {
	HomeScreen: undefined,
	DetailScreen: undefined,
	SolicitudesScreen: any
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
				cardStyle:{
					backgroundColor: 'white'
				}
			}}
		>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailsScreen } />
			<Stack.Screen name="SolicitudesScreen" component={ SolicitudesScreen } />
		</Stack.Navigator>
  );
}