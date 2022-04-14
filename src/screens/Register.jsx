import React from 'react'
import { Input, Icon, Stack, Button, Box, Text, Image } from 'native-base'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import images from '../../assets/Allimages'

const Register = () => {
  const [show, setShow] = React.useState(false)
  return (
    <Stack
      flexDir={'column'}
      w={{
        base: '80%',
        md: '30%',
      }}
    >
      <Box alignItems={'center'} p={11}>
        <Image source={images.register} alt="Logo" height={120} width={'50%'} />

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
            />
          </Box>
          <Box alignItems={'center'}>
            <Button
              w={'40%'}
              bg="erik.button"
              _text={{ color: 'erik.textButton' }}
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
        <AntDesign
          name="facebook-square"
          size={40}
          color="black"
          style={{ marginTop: '10%' }}
        />
        <FontAwesome
          name="google"
          size={40}
          color="black"
          style={{ marginTop: '10%' }}
        />
        <FontAwesome
          name="twitter-square"
          size={40}
          color="black"
          style={{ marginTop: '10%' }}
        />
      </Box>
    </Stack>
  )
}

export default Register
