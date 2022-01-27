import { Box, Container, Flex,  Text } from "@chakra-ui/react"
import { useState } from "react"
import { fromEvent, map, Observable, scan } from 'rxjs'
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
    screenHeight: window.innerWidth,
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

    const $scroll = 
        fromEvent(document, 'scroll').pipe(
            scan(reduceState, initialState)
        ).subscribe(changeNavState)

    function reduceState(s: screenInfo){

        const calcSection = Math.floor(s.currentPos / s.screenHeight)

        return ({
            ...s,
            currentSection: calcSection,
            currentPos: window.scrollY
        })
    }

    function changeNavState(s: screenInfo){
        const elem = document.getElementById(navItems[s.currentSection].idValue)
        console.log(elem)
        return elem
    }

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
                to={value.idValue}
                spy={true} 
                smooth={true} 
                duration={500}>
                    <Box w="fit-content" cursor="pointer">
                        <Text>{value.name}</Text>
                    </Box>
                </Link>)
            })}
        </Flex>
    )
}

export default Navigation; 