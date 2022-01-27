import { Box } from '@chakra-ui/react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import ProfileCard from './Components/ProfileCard';
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
      <ContactForm></ContactForm>
    </Box>
  );
}

export default App;
