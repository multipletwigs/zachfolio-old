import { Box, Center, Flex, Link, Text, Image} from "@chakra-ui/react";
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
    
    <Center w="100vw" h="100vh" bg={ThemeContext().bg} flexDirection={"column"} id="contact-me">
      <Box w={["90%", "80%", "85%", '60%', "40%"]} h="auto" rounded="2xl">
        <ProfileHeader toggleButton={false} text="📱 Contact me"></ProfileHeader>
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
      <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        rounded={'full'}
        src={require("./assets/zach.png")}></Image>
      <Text textAlign={'center'}>That's me up there! Enough about me, it's time for you to introduce yourself! I believe strongly in collaboration, if you have an idea that you would like to it into reality with, contact me! I'm sure we can make a great team :)</Text>
      <Flex gap="5" justifyContent={'center'} alignItems={'center'}>
        <Link href="mailto:lkho0007@student.monash.edu?subject=Mail from Zachfolio!"><CgMail size="45"></CgMail></Link>
        <Link href="https://www.instagram.com/afewsadtwigs/"><SiInstagram size="30"></SiInstagram></Link>
        <Link href="https://www.linkedin.com/in/zach-khong-942261207/"><SiLinkedin size="30"></SiLinkedin></Link>
        <Link href="https://github.com/multipletwigs"><SiGithub size="30"></SiGithub></Link>
      </Flex>
      </Flex>
    </Center>
  );
};

export default ContactForm;
