import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";

const ToggleHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      flexDirection="row"
      alignItems={'center'}
      justifyContent={'center'}
      mb="3"
      p="3"
      position="fixed"
      zIndex="9999"
      backdropFilter={"blur(10px)"}
      backgroundColor={ThemeContext().bg1Blur}
    >
      <Box w={["90%", "80%", "85%", "60%", "40%"]} display="flex" alignItems={"center"} justifyContent={"center"}>
      <Text fontSize="4xl" fontWeight={700} textColor={ThemeContext().text}>zachfolio</Text>
      <Button
        aria-label="Toggle Light or Dark Mode"
        onClick={toggleColorMode}
        leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        ml="auto"
        bg="none"
      >
        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
      </Button>
      </Box>
    </Flex>
  );
};

export default ToggleHeader;
