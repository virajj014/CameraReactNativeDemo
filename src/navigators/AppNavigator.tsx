import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import Home from '../screens/inner/home/Home';

const AppNavigator = () => {

    const [isLogin, setIsLogin] = React.useState(true)

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
           {
                isLogin ? (             
                    <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                  
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
                ) : (
                    <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="SignIn" component={SignIn} />
                   
                </Stack.Navigator>
                )

           }
        </NavigationContainer>
    )
}

export default AppNavigator