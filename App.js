import React from 'react';
import { StyleSheet  } from 'react-native'
import { NativeBaseProvider, Text, Box, Center, Container, Image } from 'native-base';
import Login  from './src/Login'
import images from "./src/assets/Allimages"
import Theme from "./src/assets/colors"

export default function App() {

  return (
    <NativeBaseProvider theme={Theme}>
      <Box style={styles.container} bg="bgColor.default">
        <Box flex={1} alignItems={"center"} justifyContent={"flex-end"}>
                <Image source={images.login} alt="Logo" height={100} width={100}/>
        </Box>
        <Box style={styles.content}>
          <Text color="bgColor.textBase" p={10} fontSize="4xl" fontWeight={"light"}>Login</Text>
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