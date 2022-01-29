import { Button, Center, Flex, Text } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import { SiScratch } from "react-icons/si"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const NonProjectsView = () => {

  const buttons = ["About Raspi Sekolah", "About Italki"].map((about) => 
  <Button
  fontSize={['xs','md',"md"]}
  ml="auto" 
  leftIcon={<ArrowForwardIcon />} 
  variant='outline'>
  {about}
  </Button>)

  return (
    <Center 
    id="non-projects"
    h="100vh" 
    flexDirection={"column"} 
    scrollSnapAlign={'start'}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={'column'}>
        <ProfileHeader toggleButton={false} text="Before Computer Science"></ProfileHeader>
        <Flex flexDirection={'column'} gap={'2'}>
            <ProjectCard 
            companyTitle="Raspi Sekolah" 
            description={<Text fontSize={['sm','md',"md"]}>A <Text as="span" color="#4ACFAC" fontWeight={700}>part-time tutor</Text> teaching kids who love programming about programming. Mostly Scratch.</Text>}
            bordColor="#4ACFAC"
            icons={[SiScratch]}
            navButton={buttons[0]}></ProjectCard>
            <ProjectCard 
            companyTitle="Italki" 
            description={<Text fontSize={['sm','md',"md"]}>A <Text as="span" color="#FFA48E" fontWeight={700}>freelance language tutor</Text> teaching students all over the world about Languages I know. Mainly Chinese, Cantonese, English and Bahasa Malaysia.</Text>}
            bordColor="#FFA48E"
            icons={[]}
            navButton={buttons[1]}></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default NonProjectsView;
