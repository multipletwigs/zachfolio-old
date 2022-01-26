import { Box, Container, Flex } from "@chakra-ui/react"
import ContactForm from "./ContactForm";
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";

const Home = () => {
    return (
        <Box css={{
            '&::-webkit-scrollbar': {
              display:'none',
            }}}>
            <Navigation></Navigation>
            <ProfileCard></ProfileCard>
        </Box>
    )
}

export default Home; 