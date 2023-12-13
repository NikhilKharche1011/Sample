import './App.css';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
// import Contactform from './Contactform';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
              <Route  path='/Signup' element={<Signup />} />
              <Route  path='/Login' element={<Login />} />
              
                
          </Routes>
          <Routes>
            <Route path= '/' element={<Home />}/>
          </Routes>
      </Router>
           {/* <Contactform/> */}
    </div>
  );
}

export default App;
