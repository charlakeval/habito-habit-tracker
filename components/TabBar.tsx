import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TabNavigationState, TabNavigationProp, TabScreenDescriptor } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type IconKeys = 'index' | 'compass' | 'medal' | 'profile' | 'create';

interface TabBarProps {
    state: TabNavigationState;
    descriptors: Record<string, TabScreenDescriptor>;
    navigation: TabNavigationProp<any>;
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();

    const icons = {
        index: (props: any) => <Entypo name="home" size={24} color="rgb(28, 28, 30)" {...props} />,
        compass: (props: any) => <Entypo name="compass" size={24} color="rgb(28, 28, 30)" {...props} />,
        medal: (props: any) => <FontAwesome5 name="medal" size={24} color="rgb(28, 28, 30)" {...props} />,
        profile: (props: any) => <FontAwesome name="user" size={24} color="rgb(28, 28, 30)" {...props} />,
        create: (props: any) => <AntDesign name="pluscircleo" size={40} color="rgb(78, 78, 241)" {...props} />,
    }

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];

                if (['_sitemap', '+not-found'].includes(route.name)) return null

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onLongPress={onLongPress}
                        style={styles.tabBarItem}
                    >
                        {
                            icons[route.name as IconKeys]({
                                color: route.name === "create"
                                    ? "rgb(78, 78, 241)"
                                    : (isFocused ? colors.primary : colors.text)
                            })
                        }
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;


const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: 15,
        width: "100%",
        borderRadius: 25,
        borderCurve: "continuous",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabBarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})