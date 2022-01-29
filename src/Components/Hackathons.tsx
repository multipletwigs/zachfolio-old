import { Badge, Button, Center, Flex, Text } from "@chakra-ui/react";
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

interface HackathonDesc {
  title: JSX.Element;
  desc: JSX.Element;
  link: string;
}

const hackathonItem: HackathonDesc[] = [
  {
    title: (
      <Text fontWeight={700}>
        Quick
        <Text as="span" color="red">
          Park
        </Text>
      </Text>
    ),
    desc: (
      <Text>
        This app uses Angular for frontend and Firebase as backend. We got into
        a finalist position but unfortunately did not win the competition.
      </Text>
    ),
    link: "",
  },
  {
    title: <Text fontWeight={700}>Huddle</Text>,
    desc: (
      <Text>
        This app was the first submission for my first ever hackathon. Made with
        only HTML5 and CSS3. I can only say that I've grown a lot as a fullstack
        developer.
      </Text>
    ),
    link: "",
  },
];

//Lazily evaluated functions
const popUpItems: (() => Promise<SweetAlertResult<any>>)[] = hackathonItem.map(
  (value) => {
    const reactSwal = withReactContent(Swal);
    return () =>
      reactSwal.fire({
        title: value.title,
        html: value.desc,
      });
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
      flexDirection={"column"}
      scrollSnapAlign={"start"}
    >
      <Flex w={["80%", "85%", "60%", "40%"]} flexDirection={"column"}>
        <ProfileHeader
          toggleButton={false}
          text="Hackathons for fun!"
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
