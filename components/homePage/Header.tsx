import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
const calender = require("../../assets/images/calender.png")
const bell = require("../../assets/images/bell.png")

const Header = () => {
    const [toggleToday, setToggleToday] = useState<boolean>(true)
    const [toggleClub, setToggleClub] = useState<boolean>(false)


    return (
        <View style={styles.header_main}>
            <View style={styles.headerBar}>
                <Image source={calender} height={48} width={48} />
                <Image source={bell} height={48} width={48} />
            </View>

            <View style={styles.profile_info}>
                <View style={styles.profile_info_first_view}>
                    <Text style={styles.profile_header_text}>Hi, Aadesh👋</Text>
                    <Text style={styles.profile_info_small_text}>Let's make habits together!</Text>
                </View>
                <Image source={bell} height={48} width={48} />
            </View>

            <View style={styles.today_club}>
                <Text style={toggleToday ? styles.today : styles.club} onPress={() => {
                    setToggleToday(true)
                    setToggleClub(false)
                }}>Today</Text>
                <Text style={toggleClub ? styles.today : styles.club} onPress={() => {
                    setToggleClub(true)
                    setToggleToday(false)
                }}> Clubs</Text>
            </View>

        </View >
    )
}

export default Header


const styles = StyleSheet.create({
    header_main: {
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    headerBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    profile_info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    profile_info_first_view: {
    },
    profile_header_text: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.4
    },
    profile_info_small_text: {
        color: "#d4d4d4",
        letterSpacing: 0.4,
        fontSize: 16
    },
    today_club: {
        marginTop: 12,
        backgroundColor: "#e3e4e6",
        borderWidth: 1,
        borderColor: "#e3e4e6",
        borderRadius: "30px",
        flexDirection: "row",
    },
    today: {
        backgroundColor: "white",
        borderRadius: "30px",
        width: "50%",
        fontSize: 18,
        color: "#166af2",
        letterSpacing: 0.4,
        textAlign: "center",
        paddingVertical: 5
    },
    club: {
        width: "50%",
        fontSize: 18,
        color: "#fff",
        letterSpacing: 0.4,
        textAlign: "center",
        borderRadius: "30px",
        paddingVertical: 5
    }
});
