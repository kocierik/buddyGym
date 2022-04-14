import React from "react";
import { Input, Icon, Stack, Button, Box, Text } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
// borderColor={"primary.900"}
const Login = () => {
  const [show, setShow] = React.useState(false);
  return(
  <Stack flexDir={"row"}  w={{
    base: "100%",
    md: "35%",
  }}>
    <Box flex={1} > </Box>
      <Box  padding={5}   flexGrow={5} > 
        <Stack space={5}>
          <Box alignItems={"flex-start"} >
          <Text color={"erik.text"} fontSize={"xs"}> Username </Text>
          <Input w={"100%"} borderWidth={0} borderBottomWidth={1} borderBottomColor={"primary.700"} color={"erik.text"} size={"1xl"} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="3" color="muted.300" />} placeholder="Type your username" />
          </Box>
          <Box alignItems={"flex-start"} >
          <Text color={"erik.text"} fontSize={"xs"} ml={"0.1rem"}> Password </Text>
          <Input w={"100%"} borderWidth={0} borderBottomWidth={1} borderColor={"#fff"} borderBottomColor={"primary.700"} color={"erik.text"} size={"1xl"} type={show ? "text" : "password"} InputLeftElement={<Icon marginLeft={3} as={<AntDesign  name={show ? "unlock" : "lock1"} />} 
            size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Type your password" />
            </Box>
          <Button bg="erik.button" _text={{color: "erik.textButton"}}  > Continue </Button>
        </Stack>
      </Box>
    <Box flex={1}  flexGrow={1}></Box>
    </Stack>
  )
};

export default Login
