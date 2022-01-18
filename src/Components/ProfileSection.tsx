import { Box, Text } from "@chakra-ui/react";
import ThemeContext from '../Context/ThemeContext'

const ProfileSection = () => {
  return <Box w={"100%"} bg={ThemeContext().bg} p={['5%', '5%', '3%']} rounded='2xl'>
      <Text fontWeight={600} fontSize="2xl">Everything About me </Text>
      <Text fontWeight={600} fontSize="0.9em">Hi there! Your local CS Enthusiast here :) I am interested in many CS Domains 
such as <Text as="span" color="#36C7D0">Fullstack Development</Text>, Decentralized Tech, Cryptography, 
Cyber Security, Data Science and many more! </Text>
  </Box>;
};

export default ProfileSection;
