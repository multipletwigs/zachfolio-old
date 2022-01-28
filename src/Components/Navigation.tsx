import { Box, Flex,  Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-scroll"

interface NavItem {
    idValue: string, 
    name: string
}

interface screenInfo {
    screenHeight: number;
    currentSection: number; 
    currentPos: number; 
}

const initialState: screenInfo = {
    screenHeight: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    currentSection: 0,
    currentPos: 0
}

const navItems: NavItem[] = [{
    idValue: "profile-card",
    name: "Profile"
},{
    idValue: "profile-card",
    name: "Profile"
},{
    idValue: "profile-card",
    name: "Profile"
}]


const Navigation = () => {

    //Never use rxjs within a component, switch to a context instead. 
    //If you're going to use rxjs might as well use angular lmao

    const[currSection, setSection] = useState(() => initialState.currentSection)
    const reduceState = () => [
        setSection(Math.round(window.scrollY / initialState.screenHeight))
    ]
    window.addEventListener('scroll', reduceState)

    return (
        <Flex 
        h='5vh' 
        w='100px' 
        flexDirection={'column'} 
        position={'fixed'}
        justifyContent={'center'}
        top='50%'
        left='15%'
        display={['none','none','none','flex']}
        >
            <Box p='1' border='1px' borderColor='gray.200' textAlign={'center'}>
                zachfolio
            </Box>
            {navItems.map((value, index) => {
                return (<Link 
                key={index}
                to={value.idValue}
                spy={true} 
                smooth={true} 
                duration={500}
                >
                    <Box 
                    w="fit-content" 
                    cursor="pointer"
                    textColor={index === currSection ? "white" : "gray"}
                    transition={"all 0.2s"}
                    >
                        <Text>{value.name}</Text>
                    </Box>
                </Link>)
            })}
        </Flex>
    )
}

export default Navigation; 