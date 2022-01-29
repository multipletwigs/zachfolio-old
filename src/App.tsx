import { Box } from '@chakra-ui/react';
import './App.css';
import ContactForm from './Components/ContactForm';
import HackathonsView from './Components/Hackathons';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import NonProjectsView from './Components/NonProjectView';
import ProjectsView from './Components/ProjectsView';

function App() {

  return (
    <Box css={{
      '&::-webkit-scrollbar-thumb': {
        display:'none',
      },
      scrollSnapType:'y'  
      }}>
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
