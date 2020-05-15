import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const TabNavigator = createBottomTabNavigator()

const Home: React.FC = () => (
    <TabNavigator.Navigator>
        <TabNavigator.Screen name="tab1" component={View} />
        <TabNavigator.Screen name="tab2" component={View} />
    </TabNavigator.Navigator>
)

export default Home
