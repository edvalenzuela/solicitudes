import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './navigator/StackNavigator';
import DrawerNavigator from './navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
			<DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
