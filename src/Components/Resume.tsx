import { Center, Box, Flex } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";


const Resume = () => {
    return(
    <Center w="100vw" h="100vh" bg={ThemeContext().bg} flexDirection={"column"}>
      <Box w={["80%", "85%", '60%', "40%"]} h="auto" rounded="2xl">
      <Flex
          w="100%"
          h="100%"
          bg={ThemeContext().bgProfile}
          rounded="2xl"
          p={[3, 5, "5%"]}
          flexDirection={"column"}
          gap="5"
        >
         
        </Flex>
      </Box>
    </Center>
    )
}

export default Resume; 