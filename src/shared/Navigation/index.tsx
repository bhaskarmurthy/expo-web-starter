import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Linking } from 'expo'
import { enableScreens } from './screens'
import { Welcome, Home } from '../../screens'

enableScreens()

const StackNavigator = createStackNavigator()
const prefix = Linking.makeUrl('/')

const linking = {
    prefixes: [prefix],
}

const Navigation: React.FC = () => (
    <NavigationContainer linking={linking}>
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="welcome" component={Welcome} options={{ title: 'Welcome' }} />
            <StackNavigator.Screen name="home" component={Home} options={{ title: 'Home' }} />
        </StackNavigator.Navigator>
    </NavigationContainer>
)

export default Navigation
