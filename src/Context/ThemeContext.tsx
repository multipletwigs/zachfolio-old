import { useColorModeValue } from '@chakra-ui/react'


const ThemeContext = () => {
    return {
        text: useColorModeValue('#262833', 'white'),
        bg: useColorModeValue('white', '#262833'),
        bgProfile: useColorModeValue('#CACACA', '#313242')
    }
}

export default ThemeContext; 