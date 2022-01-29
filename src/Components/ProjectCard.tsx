import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";
import React from "react";
import { IconType } from "react-icons";

const ProjectCard = ({
  companyTitle,
  description,
  bordColor,
  icons,
  navButton
}: {
  companyTitle: string;
  description: JSX.Element;
  bordColor: string;
  icons: IconType[];
  navButton: JSX.Element; 
  
}) => {
  const iconLists = icons.map((icon) => <Icon as={icon} w={6} h={6}></Icon>);

  return (
    <Flex
      _hover={{
        borderLeft: "8px",
        borderColor: bordColor,
        borderLeftRadius: "0",
        transform: "scale(1.025)",
        cursor:"pointer"
      }}
      w="100%"
      rounded={"lg"}
      flexDirection={"row"}
      borderLeft="8px"
      borderColor="transparent"
      transition={"all 0.2s"}
      p="5"
      bg={ThemeContext().bg}
      fontWeight={700}
    >
      <Box w="100%">
        <Text 
        fontSize={"2xl"} 
        fontWeight={700} 
        >
          {companyTitle}
        </Text>
        <Text>{description}</Text>
        <Flex gap="2" mt="5" alignItems={'center'}>
          {iconLists}
          {navButton}
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(ProjectCard);
