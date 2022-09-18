import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DetailsScreen = () => {

	const navigator = useNavigation();

	useEffect(() => {
		navigator.setOptions({
			headerBackTitle: ''		
		})
	}, [])
	

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};
