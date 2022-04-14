import React from "react";
import { Input, Icon, Stack, Button, Text, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Login = () => {
  const [show, setShow] = React.useState(false);
  return <Stack space={5} w="75%" alignItems="center">
    <Input color={"primary.200"} size={"1xl"} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="3" color="muted.300" />} placeholder="Name" />
    <Input color={"primary.200"} size={"1xl"} type={show ? "text" : "password"} InputRightElement={<Icon marginRight={3} as={<MaterialIcons  name={show ? "visibility" : "visibility-off"} />} 
    size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
    <Button bg="erik.button" _text={{color: "erik.textButton"}}> Continue </Button>
  </Stack>;
};

export default Login
