import { Box } from '@chakra-ui/react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import ProfileCard from './Components/ProfileCard';

function App() {
  return (
    <Box css={{
      '&::-webkit-scrollbar':{
        display: 'none'
      }
    }}>
      <Home></Home>
    </Box>
  );
}

export default App;
