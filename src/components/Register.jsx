import React from 'react'
import { Input, Icon, Stack, Button, Box, Text, Image } from 'native-base'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import images from '../../assets/Allimages'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserProfileDocument } from '../db/firebase'
import { loginContext } from '../provider/loginContext'
import { useNavigation } from '@react-navigation/native'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

const Register = () => {
  WebBrowser.maybeCompleteAuthSession()
  const [accessToken, setAccessToken] = React.useState()
  const [userInfo, setUserInfo] = React.useState()
  const [message, setMessage] = React.useState()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '10597389565-ufinq42ln6rfn8f2paakium237qbjoc8.apps.googleusercontent.com',
    iosClientId:
      '10597389565-klgfnuh6olrmej6msu02uiv3gfh477nd.apps.googleusercontent.com',
    expoClientId:
      '694235095257-fkbf1u81sm5ii76om74j5b7h8u4v2m7a.apps.googleusercontent.com',
    webClientId:
      '10597389565-c06231gc0l1a2iegv631qvae40mkq59d.apps.googleusercontent.com',
  })

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response
    }
  }, [response])

  const [show, setShow] = React.useState(false)
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const auth = getAuth()
  const navigation = useNavigation()
  const [isLogin, setIsLogin] = React.useContext(loginContext)

  const signUp = async () => {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        name,
        password
      ).catch(() => setError('Verify that the email is not already in use'))
      // Signed in

      await createUserProfileDocument(data.user)
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('errorMessage:' + errorCode + ' : ' + errorMessage)
          setError('Unknown error')
        })
        .then(() => {
          setError('')
          navigation.navigate('Home')
          navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
        })
    } catch (error) {
      setName('')
      setPassword('')
      console.log(error)
    }
  }

  return (
    <Stack
      flexDir={'column'}
      w={{
        base: '80%',
        md: '50%',
        xl: '40%',
      }}
    >
      <Box alignItems={'center'} p={11}>
        <Image
          source={images.register}
          alt="Logo"
          height={155}
          w={{
            base: '80%',
            md: '50%',
            xl: '40%',
          }}
        />

        <Text color="erik.text" fontSize="4xl" fontWeight={'bold'}>
          Register
        </Text>
      </Box>
      <Box padding={3} flexGrow={5}>
        <Stack space={5}>
          <Box alignItems={'flex-start'}>
            <Text color={'erik.text'} fontSize={'xs'}>
              Username
            </Text>
            <Input
              w={'100%'}
              borderWidth={0}
              borderBottomWidth={1}
              borderBottomColor={'primary.700'}
              color={'erik.text'}
              size={'1xl'}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="3"
                  color="muted.300"
                />
              }
              placeholder="Type your username"
              onChangeText={(e) => setName(e)}
              value={name}
            />
          </Box>
          <Box alignItems={'flex-start'}>
            <Text color={'erik.text'} fontSize={'xs'} ml={'0.1rem'}>
              Password
            </Text>
            <Input
              w={'100%'}
              borderWidth={0}
              borderBottomWidth={1}
              borderColor={'#fff'}
              borderBottomColor={'primary.700'}
              color={'erik.text'}
              size={'1xl'}
              type={show ? 'text' : 'password'}
              InputLeftElement={
                <Icon
                  marginLeft={3}
                  as={<AntDesign name={show ? 'unlock' : 'lock1'} />}
                  size={5}
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Type your password"
              onChangeText={(e) => setPassword(e)}
              value={password}
            />
          </Box>
          <Box
            alignItems={'center'}
            flexDir={'row'}
            justifyContent={'space-evenly'}
          >
            <Button
              w={'40%'}
              bg="erik.button"
              _text={{ color: 'erik.textButton' }}
              onPress={signUp}
            >
              Continue
            </Button>
          </Box>
          <Box alignItems={'center'}>
            <Text color={'erik.border'} fontSize={'xs'} fontWeight={'bold'}>
              Or Sign Up Using
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box
        flex={1}
        alignItems={'center'}
        flexDir={'row'}
        justifyContent={'space-evenly'}
      >
        <AntDesign name="facebook-square" size={40} color="black" />
        <FontAwesome
          name="google"
          size={40}
          color="black"
          onPress={() => {
            promptAsync()
          }}
        />
        <FontAwesome name="twitter-square" size={40} color="black" />
      </Box>
      <Box alignItems={'center'} p={5}>
        <Text>
          Click here to{' '}
          <Text
            color={'blue'}
            onPress={() => setIsLogin(false)}
            textDecorationLine={'underline'}
          >
            Sign in
          </Text>
        </Text>
      </Box>
    </Stack>
  )
}

export default Register
