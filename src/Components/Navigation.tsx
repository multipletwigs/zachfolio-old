import { Box, Flex,  Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-scroll"
import ThemeContext from "../Context/ThemeContext"

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
    idValue: "projects",
    name: "Work (1)"
},{
    idValue: "non-projects",
    name: "Work (2)"
},{
    idValue: "hackathons",
    name: "Hackathons"
},
{
    idValue: "contact-me",
    name: "Contact me"
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
        w='125px' 
        flexDirection={'column'} 
        position={'fixed'}
        justifyContent={'center'}
        top='50%'
        left={['none','none','none','5%','15%']}
        display={['none','none','none','flex','flex']}
        >
            <Box p='1' mb="5" border='1px' borderColor='gray.200' textAlign={'center'}>
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
                    fontWeight={'700'}
                    textColor={index === currSection ? ThemeContext().text : "gray"}
                    transition={"all 0.2s"}
                    >
                        <Text fontSize="1.2em">{value.name}</Text>
                    </Box>
                </Link>)
            })}
        </Flex>
    )
}

export default Navigation; 