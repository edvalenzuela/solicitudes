import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native';

type Props = {
	name: string,
	onChange: any;
	valueRD: any;
}

const SwitchRender = ({name, onChange, valueRD}: Props) => {
	return (
		<View style={styles.switch}>
			<Text>{name}</Text>
			<Switch 
				value={valueRD}
				onValueChange={ onChange }
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	switch:{
		justifyContent:'space-between', 
		flexDirection:'row', 
		alignItems: 'center'
	}
})

export default SwitchRender