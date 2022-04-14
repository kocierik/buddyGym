import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  Text,
  Box,
  Center,
  Container,
  Image,
} from 'native-base'
import Login from './src/Login'
import images from './assets/Allimages'
import Theme from './assets/colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
  // https://coolors.co/palette/000814-001d3d-003566-ffc300-ffd60a PALETTE

  return (
    <NativeBaseProvider theme={Theme}>
      <Box
        style={styles.container}
        bg="erik.background"
        fontFamily={'Montserrat-VariableFont_wght'}
      >
        <Box
          flex={1.5}
          alignItems={'center'}
          justifyContent={'flex-end'}
          padding={10}
        >
          <Image source={images.login} alt="Logo" height={100} width={100} />
        </Box>
        <KeyboardAwareScrollView
          style={{ width: '100%' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <Box style={styles.content}>
            <Text color="erik.text" p={10} fontSize="4xl" fontWeight={'bold'}>
              Login
            </Text>
            <Login />
          </Box>
        </KeyboardAwareScrollView>
      </Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
