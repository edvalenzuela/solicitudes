import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigator/DrawerNavigator';
import { SolicitudesProvider } from './context/SolicitudesContext';

const App = () => {
  return (
    <NavigationContainer>
			<AppState>
				<DrawerNavigator />
			</AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}:any) => {
	return (
		<SolicitudesProvider>
			{children}
		</SolicitudesProvider>
	)
}

export default App;
