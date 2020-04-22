import React, { Component } from 'react';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from '../../Navigation/RootNavigator';
import { View } from 'react-native';
import StartupActions from 'App/Stores/Startup/Actions';
import { PropTypes } from 'prop-types';
import { Helpers } from 'App/Theme';

class RootScreen extends Component {
	render() {
		return (
			<View style={Helpers.fill}>
				<AppNavigator	/>
			</View>
		);
	}
}

// RootScreen.propTypes = {
// 	startup: PropTypes.func
// };



export default RootScreen
