import React from 'react'

import './db/firebase'
import Sign from './screens/Sign'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './components/Register'
import Login from './components/Login'
import Home from './screens/Home'
import { userContext } from './provider/userContext'
const Stack = createNativeStackNavigator()

function App() {
  const [user, setUser] = React.useState()

  return (
    <userContext.Provider value={[user, setUser]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Sign"
          screenOptions={{ title: 'Sign', headerBackVisible: false }}
        >
          <Stack.Group>
            <Stack.Screen name="Sign" component={Sign} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  )
}
export default App
