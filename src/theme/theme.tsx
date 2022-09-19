import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	mainMargin:{
		marginHorizontal: 15
	},
	btnBig:{
		width:100,
		height:100,
		backgroundColor: 'black',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	centerMain: {
		flex:1, 
		alignItems:'center', 
		justifyContent:'center'
	},
	btnColorTxt:{
		color: 'white'
	},			
	btnDefault:{
		fontWeight: 'normal', 
		fontSize: 16,
		backgroundColor: 'red',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 15
	},
	containerProfile:{
    marginBottom: 30,
		alignItems: 'center'
  },
	imgContainer:{
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar:{
    width: '90%',
    height: 55
  },
	textProfile:{
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold',
		fontSize: 20,
		marginTop: 15
  },
	txtError: {
		backgroundColor: 'red', 
		color: 'white',
		fontSize: 26,
		textAlign: 'center',
		borderRadius: 10,
		paddingVertical: 10
	}
})