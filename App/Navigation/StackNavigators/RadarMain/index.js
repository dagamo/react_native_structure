import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//containers
import RadarMain from 'App/Screens/RadarMain/index';

const Stack = createStackNavigator();

const RadarMainStack = () => {
	return (
		<Stack.Navigator initialRouteName="radarMain" headerMode="none">
			<Stack.Screen name="radarMain" component={RadarMain} />
		</Stack.Navigator>
	);
};

export default RadarMainStack;
