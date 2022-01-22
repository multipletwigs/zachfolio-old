import { Box } from '@chakra-ui/react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import ProfileCard from './Components/ProfileCard';
import ProjectsView from './Components/ProjectsView';

function App() {
  return (
    <Box css={{
      '&::-webkit-scrollbar-thumb': {
        display:'none',
      }}}>
      <Home></Home>
      <ProjectsView></ProjectsView>
    </Box>
  );
}

export default App;
