import { Box, Container, Flex } from "@chakra-ui/react"
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <ProfileCard></ProfileCard>
        </Box>
    )
}

export default Home; 