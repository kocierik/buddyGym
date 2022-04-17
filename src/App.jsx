import React from 'react'

import './db/firebase'
import Sign from './screens/Sign'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './components/Register'
import Login from './components/Login'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign"
        screenOptions={{ title: 'buddyGym', headerBackVisible: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
