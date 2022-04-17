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
import Login from '../components/Login'
import Register from '../components/Register'
import Theme from '../../assets/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import '../db/firebase'
import { useContext } from 'react'
import { loginContext } from '../provider/loginContext'

const Sign = () => {
  const [isLogin, setIsLogin] = React.useState(true)

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
            <loginContext.Provider value={[isLogin, setIsLogin]}>
              {isLogin ? <Register /> : <Login />}
            </loginContext.Provider>
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
export default Sign
