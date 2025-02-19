import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'

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
        </Tabs>
    )
}

export default _layout