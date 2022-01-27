import { Box, Container, Flex, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";

const ContactForm = () => {
  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormControl w={["80%", "85%", '60%', "40%"]} gap="5" display="flex" flexDirection={'column'}>

        <Box>
            <FormLabel htmlFor="first-name">Enter your name here</FormLabel>
            <Input id="first-name" placeholder="Name" />
        </Box>
        
        <Textarea placeholder='What do you think about this portfolio?' />

      </FormControl>
    </Box>
  );
};

export default ContactForm;
