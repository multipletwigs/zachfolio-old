import { Box, ComponentWithAs, IconButton, IconProps, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";


const TimelineBox = (props: {
    year: string,
    icon: IconType
}) => {
    const IconMotion = motion(IconButton)
    const [hovered, setHover] = useState(false);

    return(
        <Box justifyContent="center" align="center" onMouseEnter={() => setHover(!hovered)} onMouseLeave={() => setHover(!hovered)} >
            <IconMotion 
            whileHover={{ rotate: 360 }}
            aria-label='Search database' 
            icon={<props.icon size={'25'}/>} 
            rounded={'full'} 
            size='lg'/> 
            <Text 
            fontWeight={700} 
            mt="2" 
            bgGradient= {hovered ? 'linear(to-r, red.500, yellow.500)' : 'linear(to-r, white, white)'}
            bgClip= {'text'}
            >{props.year}</Text>  
        </Box>
    )
}

export default TimelineBox; 