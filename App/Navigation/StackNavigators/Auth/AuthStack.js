import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//containers
import SignIn from 'App/Screens/Auth/SignIn';
import SignUp from 'App/Screens/Auth/SignUp';

const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="SignIn" headerMode="none">
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	);
};

export default AuthStack;
