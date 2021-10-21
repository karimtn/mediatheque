import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import Tabs from './Tabs'

const Stack = createNativeStackNavigator();

export class MainNavigation extends Component {
    render() {
        return (
         <Stack.Navigator>
            <Stack.Screen
             name="Tab"
             component={Tabs}
             options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
            />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>               
        )
    }
}

export default MainNavigation
