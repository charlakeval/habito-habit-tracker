import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressCard = () => {
    const percentage = 25; // Change this dynamically

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                {/* Circular Progress Indicator */}
                <View style={styles.progressContainer}>
                    <View style={styles.circleBackground}>
                        <Text style={styles.percentageText}>{percentage}%</Text>
                    </View>
                </View>

                {/* Text Content */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Your daily goals almost done!</Text>
                    <Text style={styles.subtitle}>1 of 4 completed</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        marginTop: 16,
        padding: 16,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#1E90FF", // Solid blue background
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    progressContainer: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    circleBackground: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    percentageText: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
    },
    textContainer: {
        flex: 1,
        height: "100%"
    },
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.1
    },
    subtitle: {
        color: "white",
        fontSize: 16,
        opacity: 0.8,

    },
});

export default ProgressCard;
