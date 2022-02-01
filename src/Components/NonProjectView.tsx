import { Badge, Button, Center, Flex, Text, Image,Link } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import { SiScratch } from "react-icons/si";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ThemeContext from "../Context/ThemeContext";

import CardDesc from "../Interfaces/CardDesc";
import Alerts from "./Alerts";

const nonProjectItem: CardDesc[] = [
  { 
    location: "Raspi Sekolah", 
    title: (
      <Text fontWeight={700} color="black">
        Raspi Sekolah
      </Text>
    ),
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Text fontWeight={400} color="black" textAlign={'left'}>
          Raspi Sekolah is where I teach kids the wonders of programming. I work here part-time as I study at Monash. 
          <br></br>
          <br></br>
          I have given small coding talks to live audiences via YouTube stream before, and we are planning to do more! 
        </Text>
      </Flex>
    ),
    link: "https://www.raspisekolah.com/live-coding",
  },
  {
    location: "Italki",
    title: <Text fontWeight={700}>Italki</Text>,
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        src={require("./assets/italki.png")}></Image>
        <Text fontWeight={400} color="black" textAlign={'left'}>
          I have taught over 300 lessons on Italki, mainly Chinese, Cantonese, English and Malay with consistent 5-stars rating.
          <br></br>
          <br></br>
          Unfortunately, due to months of leaving, they have deactivated my teaching account. 
          <br></br>
          <br></br>
          However It was a pleasant experience teaching students of all ages around the globe.
        </Text>
      </Flex>
    ),
    link: "https://www.italki.com/user/7434452",
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

const NonProjectsView = () => {
  const buttons = ["About Raspi Sekolah", "About Italki"].map((about, index) => (
    <Button
      onClick={() => popUpItems[index]()}
      fontSize={["xs", "md", "md"]}
      ml="auto"
      leftIcon={<ArrowForwardIcon />}
      variant="outline"
    >
      {about}
    </Button>
  ));

  const badges: JSX.Element[][] = [["Current", "Tutoring"], ["Tutoring", "Freelance"]].map((item) =>
    item.map((about) => <Badge colorScheme={'blue'}>{about}</Badge>)
  );

  return (
    <Center
      id="non-projects"
      h="100vh"
      flexDirection={"column"}
      scrollSnapAlign={"start"}
      bgColor={ThemeContext().bg}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={"column"}>
        <ProfileHeader
          toggleButton={false}
          text="⚡ !Work"
        ></ProfileHeader>
        <Flex flexDirection={"column"} gap={"2"}>
          <ProjectCard
            companyTitle="Raspi Sekolah"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                A{" "}
                <Text as="span" color="#4ACFAC" fontWeight={700}>
                  part-time tutor
                </Text>{" "}
                teaching kids who love programming about programming. Mostly
                Scratch.
              </Text>
            }
            bordColor="#4ACFAC"
            icons={[SiScratch]}
            navButton={buttons[0]}
            badge = {badges[0]}
          ></ProjectCard>
          <ProjectCard
            companyTitle="Italki"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                A{" "}
                <Text as="span" color="#FFA48E" fontWeight={700}>
                  freelance language tutor
                </Text>{" "}
                teaching students all over the world about Languages I know.
                Mainly Chinese, Cantonese, English and Bahasa Malaysia.
              </Text>
            }
            bordColor="#FFA48E"
            icons={[]}
            navButton={buttons[1]}
            badge = {badges[1]}
          ></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default NonProjectsView;
