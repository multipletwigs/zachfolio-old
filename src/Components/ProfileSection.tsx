import { Box, Text } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";

const ProfileSection = () => {
  return (
    <Box w={"100%"} bg={ThemeContext().bg} p={["5%", "5%", "3%"]} rounded="2xl">
      <Text fontWeight={700} fontSize={["1.4em", "1.4em", "1em", "2xl"]} textUnderlineOffset={'2px'} textDecoration={'underline'}
      textDecorationThickness={'3px'}
      >
        About
      </Text>
      <Text fontWeight={500} fontSize={["0.9em", "1em", "1em", "lg"]} mt='2'>
        Zach is currently a Year 2 student at Monash University who enjoys fullstack development, building many web applications for the university during his free time. You can see Zach creating digital drawings on Procreate and UI/UX Designs on Figma when he is offline. Feel free to checkout his growth below! 
      </Text>
    </Box>
  );
};

export default ProfileSection;
