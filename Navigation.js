import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./screens/Login";
import Register from "./screens/Register";
import Map from "./screens/Map"

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                <Stack.Screen name="Map" component={Map} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation