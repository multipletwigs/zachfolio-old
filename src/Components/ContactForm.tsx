import { Box, Center, Flex, Text} from "@chakra-ui/react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { CgMail } from "react-icons/cg"
import ThemeContext from "../Context/ThemeContext";
import ProfileHeader from "./ProfileHeader";


// const findMeOn = [
//   "<p style='background-image: linear-gradient(#090979, #00d4ff); -webkit-background-clip: text; color: transparent;'>LinkedIn.</p>",
//   "<p style='background-image: linear-gradient(red, yellow); -webkit-background-clip: text; color: transparent;'>Instagram.</p>",
//   "<p style='background-image: linear-gradient(#ff6f6f, white); -webkit-background-clip: text; color: transparent;'>Gmail.</p>",
// ]

const ContactForm = () => {
  return (
    
    <Center w="100vw" h="100vh" bg={ThemeContext().bg} flexDirection={"column"}>
      <Box w={["90%", "80%", "85%", '60%', "40%"]} h="auto" rounded="2xl">
        <ProfileHeader toggleButton={false} text="Contact me!"></ProfileHeader>
      </Box>
      <Flex
      gap="5"
      w={["90%", "80%", "85%", '60%', "40%"]} 
      h="fit-content" 
      alignItems='center'
      justifyContent="center"
      flexDirection={'column'}
      rounded="2xl" 
      bgColor={ThemeContext().bgProfile} 
      p="5">
      <Text fontSize="2xl" fontWeight={'700'}>Tell me about yourself! 😊</Text>
      <Text textAlign={'center'}>If you wish to know more about what I do and how I do it, do not hesitate to message me on any of these platforms.</Text>
      <Flex gap="5" justifyContent={'center'} alignItems={'center'}>
        <CgMail size="45"></CgMail>
        <SiInstagram size="30"></SiInstagram>
        <SiLinkedin size="30"></SiLinkedin>
        <SiGithub size="30"></SiGithub>
      </Flex>
      </Flex>
    </Center>
  );
};

export default ContactForm;
