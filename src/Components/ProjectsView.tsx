import { Center, Flex } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import {DiDjango} from "react-icons/di"


const ProjectsView = () => {

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
            description="A unit feedback review system for Monash University Malaysia. It is a forum like platform where students can post reviews about anything at all with regards to unit satisfaction."
            icons={[DiDjango, DiDjango, DiDjango]}></ProjectCard>
            <ProjectCard 
            companyTitle="Vaccu" 
            description="A student feedback review system for Monash University Malaysia"
            icons={[DiDjango, DiDjango, DiDjango]}></ProjectCard>
            <ProjectCard 
            companyTitle="Eureka" 
            description="A student feedback review system for Monash University Malaysia"
            icons={[DiDjango, DiDjango, DiDjango]}></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectsView;
