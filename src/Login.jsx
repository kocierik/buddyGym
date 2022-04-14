import React from 'react'
import { Input, Icon, Stack, Button, Box, Text } from 'native-base'
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons'

// borderColor={"primary.900"}
const Login = () => {
  const [show, setShow] = React.useState(false)
  return (
    <Stack
      flexDir={'column'}
      w={{
        base: '80%',
        md: '30%',
      }}
    >
      <Box alignItems={'center'} p={1}>
        <Text color="erik.text" fontSize="4xl" fontWeight={'bold'}>
          Login
        </Text>
      </Box>
      <Box padding={5} flexGrow={5}>
        <Stack space={5}>
          <Box alignItems={'flex-start'}>
            <Text color={'erik.text'} fontSize={'xs'}>
              {' '}
              Username{' '}
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
              {' '}
              Password{' '}
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
        </Stack>
      </Box>
      <Box
        flex={1}
        alignItems={'center'}
        flexDir={'row'}
        justifyContent={'center'}
      >
        <AntDesign
          name="facebook-square"
          size={30}
          color="black"
          style={{ padding: 5 }}
        />
        <FontAwesome
          name="twitter-square"
          size={30}
          color="black"
          style={{ padding: 5 }}
        />
      </Box>
    </Stack>
  )
}

export default Login
