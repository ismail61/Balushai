import logo from './logo.svg';
import './App.css';
import { MuiNavbar, MuiSidebar } from './components';
import { Card, Stack } from '@mui/material';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <Card style={{backgroundColor: 'white', minHeight: '100vh'}}>
        <MuiSidebar/>
      </Card>
      <Stack flexGrow={1}>
        <MuiNavbar/>
      </Stack>
    </div>
  );
}

export default App;
