import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent, 
  PopoverBody, 
  Text,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const TimelineBox = (props: { year: string; icon: IconType, title: string, description: string }) => {
  const IconMotion = motion(IconButton);

  return (
    <Box justifyContent="center" align="center">
      <Popover placement="top">
          <PopoverTrigger>
                <IconMotion
                whileHover={{ rotate: 360 }}
                aria-label="Search database"
                icon={<props.icon size={"25"} />}
                rounded={"full"}
                size="lg"/>
          </PopoverTrigger>
          <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>{props.title}</PopoverHeader>
    <PopoverBody>{props.description}</PopoverBody>
  </PopoverContent>
      </Popover>
      <Text fontWeight={700} mt="2">
        {props.year}
      </Text>
    </Box>
  );
};

export default TimelineBox;
