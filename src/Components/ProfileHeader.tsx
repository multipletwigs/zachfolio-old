import { Text, Button, Flex, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import ThemeContext from '../Context/ThemeContext'

const ProfileHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Flex w="100%" flexDirection="row" align='center' mb='3'>
            <Text fontSize='4xl' fontWeight={700} textColor={ThemeContext().text}>zachfolio</Text>
            <Button 
            aria-label='Toggle Light or Dark Mode'
            onClick={ toggleColorMode }
            leftIcon={ colorMode === 'light' ? <SunIcon/> : <MoonIcon/>} 
            ml='auto' 
            bg='none'>{ colorMode === 'light' ? 'Light Mode' : 'Dark Mode' }</Button>
        </Flex>
    )
}

export default ProfileHeader;