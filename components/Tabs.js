import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen 
                        name="Recherche"
                        component={SearchScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="magnify" color={color} size={size} />
                            )
                        }}
            />
            <Tab.Screen  
                        name="Favoris"
                        component={FavoriteScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="heart" color={color} size={size} />
                            )
                        }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
