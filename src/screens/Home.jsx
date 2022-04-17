import { NativeBaseProvider, Text, Box, Button } from 'native-base'
import React, { useContext } from 'react'
import Theme from '../../assets/colors'
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { userContext } from '../provider/userContext'
const Home = () => {
  const [user, setUser] = useContext(userContext)
  const auth = getAuth()
  const navigation = useNavigation()

  console.log(user)
  const signOut = () => {
    auth.signOut().then(() => {
      console.log(auth)
      setUser(null)
      console.log(user)
      navigation.navigate('Sign')
      navigation.reset({ index: 0, routes: [{ name: 'Sign' }] })
    })
  }
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return (
    <NativeBaseProvider theme={Theme}>
      <Box
        display={'flex'}
        flex={1}
        height={'100%'}
        width={'100%'}
        bg={'erik.background'}
      >
        <Box justifyContent={'center'} alignItems={'center'}>
          <Text color={'black'}>HomePage</Text>
          <Button onPress={signOut}>Sign Out</Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default Home
