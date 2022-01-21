import {
  Flex,
} from "@chakra-ui/react";
import TimelineBox from "./TimelineBox";
import { GiBabyBottle, GiPartyPopper, GiMaterialsScience, GiStairsGoal } from 'react-icons/gi'
import { IoMdSchool } from 'react-icons/io'

const ProfileSectionTimeline: () => JSX.Element = () => {
  return (
    <Flex justifyContent={"space-evenly"} mt="5">
        <TimelineBox year="2001" icon={GiBabyBottle}></TimelineBox>
        <TimelineBox year="2018" icon={IoMdSchool}></TimelineBox>
        <TimelineBox year="2021" icon={GiPartyPopper}></TimelineBox>
        <TimelineBox year="Now" icon={GiMaterialsScience}></TimelineBox>
        <TimelineBox year="Future" icon={GiStairsGoal}></TimelineBox>
    </Flex>
  );
};

export default ProfileSectionTimeline;
