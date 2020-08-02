import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './SplashScreenStyle';
import { Helpers } from 'App/Theme';
//services
import navigation from 'App/Services/NavigationService';
import { getToken } from 'App/Services/Auth';

const SplashScreen = () => {
	useEffect(() => {
		setTimeout(async () => {
			const token = await getToken();
			if (token.success) {
				navigation.replace('MainScreen');
			} else {
				navigation.replace('Auth');
			}
		}, 500);
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
