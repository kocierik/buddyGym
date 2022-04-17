import React from 'react'
import { Input, Icon, Stack, Button, Box, Text, Image } from 'native-base'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import images from '../../assets/Allimages'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserProfileDocument } from '../db/firebase'
const Register = () => {
  const [show, setShow] = React.useState(false)
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const auth = getAuth()

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
                  mr="2"
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
            <Button>Here login</Button>
          </Box>
          <Box alignItems={'center'}>
            {error && (
              <Text color={'#eb3455'} mb={3}>
                {error}
              </Text>
            )}
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
        <FontAwesome name="google" size={40} color="black" />
        <FontAwesome name="twitter-square" size={40} color="black" />
      </Box>
    </Stack>
  )
}

export default Register
