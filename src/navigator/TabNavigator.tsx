import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailsScreen } from '../screens/Details.screen';
import { SolicitudesScreen } from '../screens/Solicitudes.screen';

import { StackNavigator } from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
			initialRouteName='StackNavigator'
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={{
				headerTitleAlign: 'center',
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarStyle: {
					borderTopWidth: 0,
					backgroundColor:'black'
				},
				tabBarLabelStyle:{
					fontSize: 15,
					color: 'white'
				}
			}}
		>
			<Tab.Screen name="StackNavigator" options={{
				tabBarLabel: 'Inicio',
				tabBarIcon: ({color}) => (
					<Icon name='home-outline' color={color} size={25} />
				)
        }} component={StackNavigator} />
			<Tab.Screen name="SolicitudesScreen" options={{
					tabBarLabel: 'Listado',
					tabBarIcon: ({color}) => (
						<Icon name='list' color={color} size={25} />
					)
				}} component={SolicitudesScreen} />
      <Tab.Screen name="DetailScreen" options={{
					tabBarLabel: 'Detalle',
					tabBarIcon: ({color = 'white'}) => (
						<Icon name='file-tray-outline' color={color} size={25} />
					)
        }} component={DetailsScreen} />
    </Tab.Navigator>
  );
}