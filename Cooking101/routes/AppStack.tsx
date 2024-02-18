import { createStackNavigator } from "@react-navigation/stack";
import Home  from '../homepage/home'

const Stack = createStackNavigator()

// navigation stack for authenticated users
export function AppStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="homepage" component={Home} options={{headerShown: false}}/> 
        </Stack.Navigator>
    )
}