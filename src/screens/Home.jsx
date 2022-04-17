import { NativeBaseProvider, Text, Box } from 'native-base'
import React from 'react'
import Theme from '../../assets/colors'

function Home() {
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
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default Home
