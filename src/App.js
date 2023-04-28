import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home/home';
import Form from './components/form/form';
import APIData from './components/APIData/APIData';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="link">&nbsp;Home&nbsp;</Link>
          &nbsp;
        <Link to="/form" className="link">&nbsp;Form&nbsp;</Link>
        <Link to="/APIData" className="link">&nbsp;Data&nbsp;</Link>
        <Link to="/Login" className="link">&nbsp;Login&nbsp;</Link>
        <Link to="/Signup" className="link">&nbsp;Signup&nbsp;</Link>
        &nbsp;
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/APIData" element={<APIData />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
      </Routes> 
    </div>
    </Router>

  );
}

export default App;
