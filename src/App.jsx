import React from 'react'
import { StyleSheet } from 'react-native'
import {
  NativeBaseProvider,
  Text,
  Box,
  Center,
  Container,
  Image,
} from 'native-base'
import Login from './screens/Login'
import Register from './screens/Register'
import Theme from '../assets/colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import './db/firebase'

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <Box
        style={styles.container}
        bg="erik.background"
        fontFamily={'Montserrat-VariableFont_wght'}
      >
        <Box flex={1} padding={5}></Box>
        <KeyboardAwareScrollView
          style={{ width: '100%' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          <Box style={styles.content}>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
