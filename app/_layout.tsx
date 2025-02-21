import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/tabBar/TabBar'

const _layout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />} >
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='compass'
                options={{
                    title: "Compass",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='create'
                options={{
                    title: "Create",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='medal'
                options={{
                    title: "Medal",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='habitForm'
                options={{
                    title: "Habit Form",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='settingsScreen'
                options={{
                    title: "Setting",
                    headerShown: false,
                }}
            />
        </Tabs>
    )
}

export default _layout