import { Box, Center } from '@chakra-ui/react';
import './App.css';
import ContactForm from './Components/ContactForm';
import HackathonsView from './Components/Hackathons';
import HeaderToggle from './Components/HeaderToggle';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import NonProjectsView from './Components/NonProjectView';
import ProfileHeader from './Components/ProfileHeader';
import ProjectsView from './Components/ProjectsView';

function App() {

  return (
    <Box css={{
      '&::-webkit-scrollbar-thumb': {
        display:'none',
      }
    }}>
      <HeaderToggle></HeaderToggle>
      <Navigation></Navigation>
      <Home></Home>
      <ProjectsView></ProjectsView>
      <NonProjectsView></NonProjectsView>
      <HackathonsView></HackathonsView>
      <ContactForm></ContactForm>
    </Box>
  );
}

export default App;
