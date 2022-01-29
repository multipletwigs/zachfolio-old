import { Center, Box, Flex, Image, Text } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ThemeContext from "../Context/ThemeContext";
import ProfileSection from "./ProfileSection";
import Typewriter from "typewriter-effect";
import ProfileSectionTimeline from "./ProfileSectionTimeline";

const ProfileCard = () => {

  return (
    <Center w="100vw" h="100vh" bg={ThemeContext().bg} flexDirection={"column"}>
      <Box w={["90%", "80%", "85%", '60%', "40%"]} h="auto" rounded="2xl">
        <ProfileHeader toggleButton={true} text={'zachfolio'}></ProfileHeader>
        <Flex
          w="100%"
          h="100%"
          bg={ThemeContext().bgProfile}
          rounded="2xl"
          p={[3, 5, "5%"]}
          flexDirection={"column"}
          gap="2"
        >
          <Flex align="center" gap="5">
            <Image
              w={["30%", "30%", "20%", "15%"]}
              src={require("./assets/image1.png")}
            ></Image>
            <Box>
              <Text fontSize={["lg", "3xl", "4xl"]} fontWeight={800}>
                Zach Khong
              </Text>
              <Flex
                align={"center"}
                gap="1"
                fontSize={['sm','lg',"xl"]}
                fontWeight={700}
                color="#7E8CE0"
              >
                <Box height={'3vh'}>
                <Typewriter
                  options={{
                    strings: ['Student at Monash University Malaysia.', 'Fullstack Project Manager at UReview.', 'Fullstack developer at Vaccu.', 'Frontend Developer at Eureka.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <ProfileSection></ProfileSection>
          <ProfileSectionTimeline></ProfileSectionTimeline>
        </Flex>
      </Box>
      <Text textColor={'gray.500'} fontWeight={700} fontSize={'sm'}>© 2022 Zach Khong. All Rights Reserved.</Text>
    </Center>
  );
};

export default ProfileCard;
