import {
  Flex,
} from "@chakra-ui/react";
import TimelineBox from "./TimelineBox";
import { GiBabyBottle, GiPartyPopper, GiMaterialsScience, GiStairsGoal } from 'react-icons/gi'
import { IoMdSchool } from 'react-icons/io'

const ProfileSectionTimeline: () => JSX.Element = () => {
  return (
    <Flex justifyContent={"space-evenly"} mt="5">
        <TimelineBox year="2001" icon={GiBabyBottle} title="The year I was born 👶" description="Ready to face challenges from the world!"></TimelineBox>
        <TimelineBox year="2018" icon={IoMdSchool} title="Graduated from 坤成中学 (KCHS) 🏫" description="Achived 10A's for SPM, with a class average of 71.5%"></TimelineBox>
        <TimelineBox year="2021" icon={GiPartyPopper} title="Entered Year 2 of my Bachelors of CS in Data Science ✨" description="Experienced tremendous growth in programming skills, ending the semester with 3.91 CGPA and 85 WAM."></TimelineBox>
        <TimelineBox year="Now" icon={GiMaterialsScience} title="Year 2 Semester 2 💢" description="Falling in love with programming, learning everything I can. Currently focusing on backend development with Nest.js and Tensorflow/PyTorch for AI related projects."></TimelineBox>
        <TimelineBox year="Future" icon={GiStairsGoal} title="Future?? 🔮" description="I see myself publishing many socially useful apps and working full-time either as an employee at my dream company, or a full-fledged freelancer building stuff I want to build. Join me on this journey to success :)"></TimelineBox>
    </Flex>
  );
};

export default ProfileSectionTimeline;
