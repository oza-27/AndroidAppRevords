import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from './Location';
import Favourite from './Favourites';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileStack from './ProfileStack';
import LocationStack from './LocationStack';

export default function TabNavigation({ route, navigation }) {
    const Tab = createBottomTabNavigator();
    const { MemberData } = route.params;
    console.log(MemberData)
    const Stack = createNativeStackNavigator();

    return (
        <>
            {/* <Stack.Screen name="MapView" component={MapViewing} options={{ headerShown: false }} /> */}
            <Tab.Navigator screenOptions={() => ({
                tabBarActiveTintColor: 'white', // Color of the active tab label
                tabBarInactiveTintColor: 'gray', // Color of the inactive tab label
                labelStyle: {
                    fontSize: 20, // Font size of the tab label
                    fontWeight: 'bold', // Font weight of the tab label
                },
                tabBarStyle: { backgroundColor: 'black', height: 70, paddingBottom: 10 },
                style: {
                    backgroundColor: 'white', // Background color of the tab bar
                    borderTopWidth: 1, // Border top width of the tab bar
                    borderTopColor: 'lightgray', // Border top color of the tab bar
                },
            })}>
                <Tab.Screen name="Location" component={LocationStack} options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => (
                        <Ionicons name="compass-outline" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Favourite" component={Favourite} options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileStack} initialParams={{ MemberData }} options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </>
    );
}