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

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="link">&nbsp;Home&nbsp;</Link>
          &nbsp;
        <Link to="/form" className="link">&nbsp;Form&nbsp;</Link>
        <Link to="/APIData" className="link">&nbsp;Data&nbsp;</Link>
        &nbsp;
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/APIData" element={<APIData />} />
      </Routes> 
    </div>
    </Router>

  );
}

export default App;
