import { Box, Flex,} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { GiFairy } from "react-icons/gi";

const findMeOn = [
  "<p style='background-image: linear-gradient(#090979, #00d4ff); -webkit-background-clip: text; color: transparent;'>LinkedIn.</p>",
  "<p style='background-image: linear-gradient(red, yellow); -webkit-background-clip: text; color: transparent;'>Instagram.</p>",
  "<p style='background-image: linear-gradient(#ff6f6f, white); -webkit-background-clip: text; color: transparent;'>Gmail.</p>",
]

const ContactForm = () => {
  return (
    <Box
    id="contact-me"
      h="100vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box w={["80%", "85%", '60%', "40%"]} fontSize={'5xl'} fontWeight="700" 
      display='flex' flexDirection={'row'} alignItems={'center'}>
  
        <Box h="2em">
        Find me on 
        <Typewriter
                  options={{
                    strings: findMeOn,
                    autoStart: true,
                    loop: true,
                    cursor: ""
                  }}
                />
        </Box>
        <Flex>
                  <GiFairy></GiFairy>
                  <GiFairy></GiFairy>
                  <GiFairy></GiFairy>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactForm;
