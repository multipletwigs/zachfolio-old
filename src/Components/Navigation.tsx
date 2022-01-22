import { Box, Container, Flex, Link, Text } from "@chakra-ui/react"

const Navigation = () => {
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
            <Link mt='5'>
                Home
            </Link>
            <Link>
                Projects
            </Link>
            <Link>
                Contact
            </Link>
        </Flex>
    )
}

export default Navigation; 