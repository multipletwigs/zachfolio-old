import { useColorModeValue } from '@chakra-ui/react'


const ThemeContext = () => {
    return {
        text: useColorModeValue('#262833', 'white'),
        bg: useColorModeValue('#f5f6fb', '#262833'),
        bg1: useColorModeValue('#Fff', '#313242'),
        bg1Blur: useColorModeValue('rgba(255, 255, 255, 0.4)', 'rgba(49, 50, 66, 0.4)'),
        bgProfile: useColorModeValue('#Fff', '#313242')
    }
}

export default ThemeContext; 