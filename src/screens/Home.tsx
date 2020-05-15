import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Home: React.FC = () => (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
)

export default Home
