import React from 'react';
import { StyleSheet } from 'react-native'
import { NativeBaseProvider, Text, Box, Center, Container } from 'native-base';
import Login  from './src/Login'
export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.content}>
          <Text color="#fff" p={10} fontSize="4xl" fontWeight={"light"}>Login</Text>
          <Login />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    height:"100%",
    width:"100%",
    backgroundColor: "#000000"
  },
  content: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});