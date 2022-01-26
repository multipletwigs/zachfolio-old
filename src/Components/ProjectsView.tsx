import { Center, Flex } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import {DiDjango} from "react-icons/di"


const ProjectsView = () => {
  return (
    <Center h="100vh" flexDirection={"column"}>
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={'column'}>
        <ProfileHeader toggleButton={false} text="Work"></ProfileHeader>
        <Flex flexDirection={'column'} gap={'2'}>
            <ProjectCard 
            companyTitle="UReview" 
            description="A student feedback review system for Monash University Malaysia"
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
