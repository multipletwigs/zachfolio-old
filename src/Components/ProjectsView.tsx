import { Button, Center, Flex, Text } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import {DiDjango, DiAngularSimple, DiReact} from "react-icons/di"
import { SiChakraui, SiTailwindcss } from "react-icons/si"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const ProjectsView = () => {

  const buttons = ["About UReview", "About Vaccu", "About Raspi Sekolah", "About Italki"].map((about) => 
  <Button
  fontSize={['sm','md',"md"]}
  ml="auto" 
  leftIcon={<ArrowForwardIcon />} 
  variant='outline'>
  {about}
  </Button>)

  return (
    <Center 
    id="projects"
    h="100vh" 
    flexDirection={"column"} 
    scrollSnapAlign={'start'}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={'column'}>
        <ProfileHeader toggleButton={false} text="Work"></ProfileHeader>
        <Flex flexDirection={'column'} gap={'2'}>
            <ProjectCard 
            companyTitle="UReview" 
            description={<Text fontSize={['sm','md',"md"]}>Currently responsible for the <Text fontWeight={700} as="span" color="#7E8CE0">project management and fullstack development of the website.</Text> This means that I am involved in the lifecycle of the whole project ranging from frontend, backend, deployment and documentation.</Text>}
            bordColor="#7E8CE0"
            icons={[DiAngularSimple, DiDjango]}
            navButton={buttons[0]}></ProjectCard>
            <ProjectCard 
            companyTitle="Vaccu" 
            description={<Text fontSize={['sm','md',"md"]}>Currently a new member onboard of the Vaccu development team, aiming to substitute developers who are graduating from Monash soon. <Text as="span" color="#36C7D0" fontWeight={700}>Training for a fullstack development position.</Text></Text>}bordColor="#36C7D0"
            icons={[DiReact, SiChakraui, SiTailwindcss, DiDjango]}
            navButton={buttons[1]}></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectsView;
