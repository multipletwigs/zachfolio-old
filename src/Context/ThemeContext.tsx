import { useColorModeValue } from '@chakra-ui/react'


const ThemeContext = () => {
    return {
        text: useColorModeValue('#262833', 'white'),
        bg: useColorModeValue('#f4ede4', '#262833'),
        bg1: useColorModeValue('#f0e7db', '#313242'),
        bgProfile: useColorModeValue('#f4ede4', '#313242')
    }
}

export default ThemeContext; 