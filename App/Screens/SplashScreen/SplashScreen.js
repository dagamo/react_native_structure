import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './SplashScreenStyle';
import { Helpers } from 'App/Theme';
import navigation from 'App/Services/NavigationService';

const SplashScreen = () => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('MainScreen');
		}, 1000);
	}, []);

	return (
		<View style={[ Helpers.fillRowCenter, styles.container ]}>
			<View style={[ Helpers.center, styles.logo ]}>
				{/* You will probably want to insert your logo here */}
				<Text>LOGO</Text>
			</View>
		</View>
	);
};

export default SplashScreen;
