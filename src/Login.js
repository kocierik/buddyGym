import React from "react";
import { Input, Icon, Stack, Button, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
// borderColor={"primary.900"}
const Login = () => {
  const [show, setShow] = React.useState(false);
  return(
  // <Box w={"100%"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} flex={1}>
  <Stack flexDir={"row"}  w={{
    base: "100%",
    md: "35%",
  }}>
    <Box flex={0.1}  flexGrow={1}> </Box>
      <Box  padding={5} flex={1} flexGrow={4} > 
        <Stack space={5}  alignItems="center">
          <Input color={"primary.200"} size={"1xl"} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="3" color="muted.300" />} placeholder="Name" />
          <Input color={"primary.200"} size={"1xl"} type={show ? "text" : "password"} InputRightElement={<Icon marginRight={3} as={<MaterialIcons  name={show ? "visibility" : "visibility-off"} />} 
            size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
          <Button bg="erik.button" _text={{color: "erik.textButton"}}> Continue </Button>
        </Stack>
      </Box>
    <Box flex={1}  flexGrow={1}></Box>
    </Stack>
  )
};

export default Login
