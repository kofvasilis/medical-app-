
import './App.css';
import Login from './Pages/Login'
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from "@mui/material";


function App() {


  
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
          <div className="App">
            <Container>
              <Routes>
                {/* edit during development phase for easier navigation */}
                <Route path='/' element={ <Login />}/>
                <Route path='/home' element={ <Home /> }/>
                
              </Routes>
            </Container>
          </div>
      </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
