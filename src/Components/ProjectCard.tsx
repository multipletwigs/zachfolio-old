import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import ThemeContext from "../Context/ThemeContext";
import React from "react";
import { IconType } from "react-icons";

const ProjectCard = ({
  companyTitle,
  description,
  icons,
}: {
  companyTitle: string;
  description: string;
  icons: IconType[];
}) => {
  const iconLists = icons.map((icon) => <Icon as={icon} w={8} h={8}></Icon>);

  return (
    <Flex
      _hover={{
        borderLeft: "8px",
        borderColor: "gray.200",
        borderLeftRadius: "0",
        transform: "scale(1.05)",
      }}
      w="100%"
      rounded={"lg"}
      flexDirection={"row"}
      borderLeft="8px"
      borderColor="transparent"
      transition={"all 0.2s"}
      p="5"
      bg={ThemeContext().bg}
    >
      <Box>
        <Text 
        fontSize={"2xl"} 
        fontWeight={700} 
        >
          {companyTitle}
        </Text>
        <Text>{description}</Text>
        <Flex gap="2" mt="5">
          {iconLists}
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(ProjectCard);
