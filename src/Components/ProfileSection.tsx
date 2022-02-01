import { Box, Text } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";

const ProfileSection = () => {
  return (
    <Box w={"100%"} bg={ThemeContext().bg} p={["5%", "5%", "3%"]} rounded="2xl">
      <Text
        fontWeight={700}
        fontSize={["1.4em", "1.4em", "1em", "2xl"]}
        textUnderlineOffset={"2px"}
        textDecoration={"underline"}
        textDecorationThickness={"3px"}
      >
        About
      </Text>
      <Text fontWeight={600} fontSize={["0.9em", "1em", "1em", "lg"]} mt="2" textAlign={'justify'}>
        Zach is currently a{" "}
        <Text as="span" color="#36C7D0">
          Year 2 student at Monash University
        </Text>{" "}
        who enjoys different technologies such as {" "}
        <Text as="span" color="#4ACFAC">
          Fullstack Development, Blockchain, ML, Data Analytics and many more
        </Text>
        , building web applications for the university during his free
        time. You can see Zach creating{" "}
        <Text as="span" color="#F4D5BB">
          digital drawings on Procreate
        </Text>
        ,{" "}
        <Text as="span" color="#FFAF5F">
          UI/UX Designs on Figma
        </Text>{" "}
        and{" "}
        <Text as="span" color="#7E8CE0">
          3D Animations on Blender
        </Text>{" "}
        when he is offline. Checkout his growth below!
      </Text>
    </Box>
  );
};

export default ProfileSection;
