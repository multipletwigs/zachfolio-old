import { Badge, Button, Center, Flex, Text, Image } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import { DiDjango, DiAngularSimple, DiReact } from "react-icons/di";
import { ImStatsBars } from "react-icons/im"
import { SiChakraui, SiTailwindcss } from "react-icons/si";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ThemeContext from "../Context/ThemeContext";
import Alerts from "./Alerts";
import CardDesc from "../Interfaces/CardDesc";

const nonProjectItem: CardDesc[] = [
  { 
    location: "UReview", 
    title: (
      <Text fontWeight={700} color="black">
        Raspi Sekolah
      </Text>
    ),
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        src={require("./assets/ureview.png")}></Image>
        <Text fontWeight={400} color="black" textAlign={'left'}>
          UReview is a school-funded website where students can give reviews to lectures and units forum style that runs the whole semester. 
          <br></br>
          <br></br>
          This allows Monash to collect valuable feedback regarding unit performance, running in tandem with existing unit feedback services like SETU and ESSFS. 
        </Text>
      </Flex>
    ),
    link: "https://monash.ureview.org/#/aboutus",
  },
  {
    location: "Vaccu",
    title: <Text fontWeight={700}>Vaccu</Text>,
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        src={require("./assets/vaccu.png")}></Image>
        <Text fontWeight={400} color="black" textAlign={'left'}>
          Vaccu is a platform for students from the School of Medicine to upload their vaccination information as per school requirements.
          <br></br>
          <br></br>
          As of now, Vaccu is still under development, and is soon to be used school-wide within the next few months or so.
        </Text>
      </Flex>
    ),
    link: "javascript:void(0)",
  },
];

//Lazily evaluated functions
const popUpItems: (() => void)[] = nonProjectItem.map(
  (value) => {
    const reactAlert = new Alerts()
    return () =>
      reactAlert.cardNotice(value.location, value.desc, value.title).then((buttonRes) => {
        if(buttonRes.isConfirmed) {
          window.open(
            value.link,
            '_blank'
          );
      }
    })
  }
);

const ProjectsView = () => {
  const buttons: JSX.Element[] = [
    "About UReview",
    "About Vaccu",
  ].map((about, index) => (
    <Button
    onClick={() => popUpItems[index]()}
      fontSize={["sm", "md", "md"]}
      ml="auto"
      leftIcon={<ArrowForwardIcon />}
      variant="outline"
    >
      {about}
    </Button>
  ));

  const badges: JSX.Element[][] = [["Current", "Fullstack", "PM"], ["Pending Hirement", "Fullstack"]].map((item) =>
    item.map((about) => (
      <Badge variant='subtle' colorScheme="purple" h="fit-content">{about}</Badge>
    ))
  );

  return (
    <Center
      id="projects"
      h="100vh"
      flexDirection={"column"}
      bgColor={ThemeContext().bg}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={"column"}>
        <ProfileHeader toggleButton={false} text="💼 Work"></ProfileHeader>
        <Flex flexDirection={"column"} gap={"2"}>
          <ProjectCard
            companyTitle="UReview"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                Currently responsible for the{" "}
                <Text fontWeight={700} as="span" color="#7E8CE0">
                  project management, fullstack development and data analystics of the website.
                </Text>{" "}
                This means that I am involved in the lifecycle of the whole
                project ranging from frontend, backend, deployment and
                documentation.
              </Text>
            }
            bordColor="#7E8CE0"
            icons={[DiAngularSimple, DiDjango, ImStatsBars]}
            navButton={buttons[0]}
            badge={badges[0]}
          ></ProjectCard>
          <ProjectCard
            companyTitle="Vaccu"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                Currently a new member onboard of the Vaccu development team,
                aiming to substitute developers who are graduating from Monash
                soon.{" "}
                <Text as="span" color="#36C7D0" fontWeight={700}>
                  Training for a fullstack development position.
                </Text>
                <br></br>
                <br></br>
                <Text as="span" fontStyle={'italic'} fontWeight={300}>
                  *Website will be featured once it's up and running!
                </Text>
              </Text>
              
            }
            bordColor="#36C7D0"
            icons={[DiReact, SiChakraui, SiTailwindcss, DiDjango]}
            badge={badges[1]}
          ></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectsView;
