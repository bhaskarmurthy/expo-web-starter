import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from '../shared/Navigation'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Welcome: React.FC = () => (
    <View style={styles.container}>
        <Link to="/home">
            <Text>Get Started</Text>
        </Link>
    </View>
)

export default Welcome
