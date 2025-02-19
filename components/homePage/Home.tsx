import React from 'react'
import Header from './Header'
import CalendarStrip from './Calender'
import ProgressCard from './ProgressCard'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Challenges from './Challenges'
import Habits from './Habits'

const Home = () => {
    return (
        <SafeAreaView>
            <Header />
            <View style={styles.home_container}>
                <CalendarStrip />
                <ProgressCard />
                <Challenges />
                <Habits />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    home_container: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        // backgroundColor: "red",
        borderTopWidth: 1,
        borderColor: "#e3e4e6",
    }
})