import { Badge, Button, Center, Flex, Link, Text, Image } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProjectCard from "./ProjectCard";
import {
  SiAndroidstudio,
  SiAngular,
  SiCss3,
  SiFirebase,
  SiHtml5,
} from "react-icons/si";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import Swal, { SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ThemeContext from "../Context/ThemeContext";

import Alerts from "./Alerts"
import CardDesc from "../Interfaces/CardDesc";


const hackathonItem: CardDesc[] = [
  { 
    location: "QuickPark Repo", 
    title: (
      <Text fontWeight={700} color="black">
        Quick
        <Text as="span" color="#FF807E">
          Park
        </Text>
      </Text>
    ),
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        src={require("./assets/QuickPark-Logo.png")}></Image>
        <Text fontWeight={400} color="black" textAlign={'left'}>
          We have a small write up through our GitHub Repo! 
          <br></br>
          <br></br>
          Me and another member spent a few days coding the whole project out. I'm super proud of this product!
          <br></br>
          <br></br>
          Please do visit our 
          <Link 
          color="#FF807E" 
          fontWeight={700} 
          textDecorationLine={'2px'} 
          target="_blank"
          href="https://www.youtube.com/watch?v=jZ9qwAiZfdw"> YouTube submissions </Link> 
          to learn more about QuickPark.
        </Text>
      </Flex>
    ),
    link: "https://github.com/QuickPark-Monash/quickpark-monash-mobile",
  },
  {
    location: "our YouTube submission",
    title: <Text fontWeight={700}>Huddle</Text>,
    desc: (
      <Flex 
      flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap="5">
        <Image 
        w={["30%", "30%", "20%", "30%"]}
        mb="3"
        src={require("./assets/relationship.png")}></Image>
        <Text fontWeight={400} color="black" textAlign={'left'}>
          This was my very first attempt at a hackathon! The results were not pretty, but it was an entry-point to my goal of freelancing 😇
          <br></br>
          <br></br>
          I'm turning this idea into a full-fledged mobile app in the very near future. So stay tuned! Connect with me if you want to know more 🦊
        </Text>
      </Flex>
    ),
    link: "https://youtu.be/RJY7I80WwNo",
  },
];

//Lazily evaluated functions
const popUpItems: (() => void)[] = hackathonItem.map(
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

const HackathonsView = () => {
  const buttons = ["About QuickPark", "About Huddle"].map((about, index) => (
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

  const badges: JSX.Element[][] = [
    ["Hackathon", "Owner", "Fullstack"],
    ["Hackathon", "Owner", "FrontEnd"],
  ].map((item) =>
    item.map((about) => (
      <Badge variant="subtle" colorScheme="green" h="fit-content">
        {about}
      </Badge>
    ))
  );

  return (
    <Center
      id="hackathons"
      h="100vh"
      w="auto"
      flexDirection={"column"}
      scrollSnapAlign={"start"}
      bgColor={ThemeContext().bg}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={"column"}>
        <ProfileHeader
          toggleButton={false}
          text="🦩 Hackathons!"
        ></ProfileHeader>
        <Flex flexDirection={"column"} gap={"2"}>
          <ProjectCard
            companyTitle="Quickpark"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                A smart parking solution aiming to solve parking issues for
                Malaysians. We want to give users a deterministic parking
                process, no more circling around the parking lot finding
                yourself the next parking.
              </Text>
            }
            bordColor="#4ACFAC"
            icons={[SiAngular, SiFirebase]}
            navButton={buttons[0]}
            badge={badges[0]}
          ></ProjectCard>
          <ProjectCard
            companyTitle="Huddle"
            description={
              <Text fontSize={["sm", "md", "md"]}>
                An app focused on allowing couples to communicate with each
                other via emoticon based notifications and text. We want couples
                to feel like the app is made just for the two of them. I am
                planning to turn this into an actual app, using Flutter, so stay
                tuned.
              </Text>
            }
            bordColor="#FFA48E"
            icons={[SiAndroidstudio, SiHtml5, SiCss3]}
            navButton={buttons[1]}
            badge={badges[1]}
          ></ProjectCard>
        </Flex>
      </Flex>
    </Center>
  );
};

export default HackathonsView;
