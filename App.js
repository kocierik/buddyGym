import React, { Component } from 'react';
import { StyleSheet  } from 'react-native'
import GlobalFont from 'react-native-global-font'
import { NativeBaseProvider, Text, Box, Center, Container, Image } from 'native-base';
import Login  from './src/Login'
import images from "./assets/Allimages"
import Theme from "./assets/colors"

export default function App() {


  // https://coolors.co/palette/000814-001d3d-003566-ffc300-ffd60a PALETTE

  return (
    <NativeBaseProvider theme={Theme} >
      <Box style={styles.container} bg="erik.background" fontFamily={"Montserrat-VariableFont_wght"}>
        <Box flex={1} alignItems={"center"} justifyContent={"flex-end"}>
                <Image source={images.login} alt="Logo" height={100} width={100}/>
        </Box>
        <Box style={styles.content} width={"100%"}>
          <Text color="erik.text" p={10} fontSize="4xl" fontWeight={"light"} >Login</Text>
          <Login />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1,
    height:"100%",
    width:"100%",
  },
  content: {
    flex: 2,
    justifyContent:"flex-start",
    alignItems:"center",
  },
});