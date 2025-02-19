import React from 'react'
import Header from './Header'
import CalendarStrip from './Calender'
import ProgressCard from './ProgressCard'
import { StyleSheet, View } from 'react-native'
import Challenges from './Challenges'
import Habits from './Habits'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Home = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Header />
                <View style={styles.home_container}>
                    <CalendarStrip />
                    <ProgressCard />
                    <Challenges />
                    <Habits />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home

const styles = StyleSheet.create({
    home_container: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: "#e3e4e6",
    }
})