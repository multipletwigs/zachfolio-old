import { useColorModeValue } from '@chakra-ui/react'


const ThemeContext = () => {
    return {
        text: useColorModeValue('#262833', 'white'),
        bg: useColorModeValue('#f0e7db', '#262833'),
        bgProfile: useColorModeValue('#f4ede4', '#313242')
    }
}

export default ThemeContext; 