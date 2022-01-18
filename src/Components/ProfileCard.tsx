import { Center, Box, Flex, Image, Text } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ThemeContext from "../Context/ThemeContext";
import ProfileSection from "./ProfileSection";
import { StarIcon } from "@chakra-ui/icons"

const ProfileCard = () => {
    
    return(
        <Center w='100vw' h='100vh' bg={ThemeContext().bg} flexDirection={"column"}>
            <Box w={['80%','85%', '60%']} h='auto' rounded="2xl">
                <ProfileHeader></ProfileHeader>
                <Flex 
                w='100%' 
                h='100%' 
                bg={ThemeContext().bgProfile}  
                rounded="2xl" 
                p={[3, 5, '5%']} 
                flexDirection={'column'}
                gap="5"
                >
                    <Flex align='center' gap="5">
                        <Image w={['30%', '30%', '20%', '15%']} src={require('./assets/image1.png')}></Image>
                        <Box>
                            <Text fontSize="4xl" fontWeight={700} >Zach Khong</Text>
                            <Flex 
                            align={'center'} 
                            gap="1" 
                            fontSize={['lg', 'sm', 'xl']} 
                            fontWeight={700} 
                            color="#7E8CE0">
                                Student at Monash University Malaysia</Flex>
                        </Box>
                    </Flex>
                    <ProfileSection></ProfileSection>
                    <ProfileSection></ProfileSection>
                </Flex>
            </Box>
        </Center>
    )
}


export default ProfileCard; 