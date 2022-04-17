import { NativeBaseProvider, Text, Box, Button } from 'native-base'
import React from 'react'
import Theme from '../../assets/colors'
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
function Home() {
  const auth = getAuth()
  const navigation = useNavigation()

  console.log(auth)
  const signOut = () => {
    auth.signOut().then(() => console.log(auth))
  }

  useEffect(() => {
    if (auth.currentUser == undefined) {
      navigation.navigate('Sign')
      navigation.reset({ index: 0, routes: [{ name: 'Sign' }] })
    }
  }, [auth])

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
