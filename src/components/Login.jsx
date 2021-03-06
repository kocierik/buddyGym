import React from 'react'
import { Input, Icon, Stack, Button, Box, Text, Image, Link } from 'native-base'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import images from '../../assets/Allimages'
import { useContext } from 'react'
import { loginContext } from '../provider/loginContext'

const Login = () => {
  const [show, setShow] = React.useState(false)
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const signIn = () => {}
  const [isLogin, setIsLogin] = React.useContext(loginContext)

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
          source={images.login}
          alt="Logo"
          height={155}
          w={{
            base: '80%',
            md: '50%',
            xl: '40%',
          }}
        />

        <Text color="erik.text" fontSize="4xl" fontWeight={'bold'}>
          Login
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
              defaultValue={name}
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
              defaultValue={password}
            />
          </Box>
          <Box alignItems={'center'}>
            <Button
              w={'40%'}
              bg="erik.button"
              _text={{ color: 'erik.textButton' }}
              colorScheme={'cyan'}
              onPress={signIn}
            >
              Continue
            </Button>
          </Box>
          <Box alignItems={'center'} mt={0}>
            <Text color={'erik.text'} fontSize={'xs'} fontWeight={'bold'}>
              Or Sign In Using
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
      <Box alignItems={'center'} p={5}>
        <Text>
          Click here to{' '}
          <Text
            color={'blue'}
            onPress={() => setIsLogin(true)}
            textDecorationLine={'underline'}
          >
            Sign Up
          </Text>
        </Text>
      </Box>
    </Stack>
  )
}

export default Login
