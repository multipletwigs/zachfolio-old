import { Box,  IconButton, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { IconType } from "react-icons";


const TimelineBox = (props: {
    year: string,
    icon: IconType
}) => {
    const IconMotion = motion(IconButton)

    return(
        <Box justifyContent="center" align="center">
            <IconMotion 
            whileHover={{ rotate: 360 }}
            aria-label='Search database' 
            icon={<props.icon size={'25'}/>} 
            rounded={'full'} 
            size='lg'/> 
            <Text 
            fontWeight={700} 
            mt="2" 
            >{props.year}</Text>  
        </Box>
    )
}

export default TimelineBox; 