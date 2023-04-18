import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home';
import Form from './components/form';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="link">&nbsp;Home&nbsp;</Link>
          &nbsp;
        <Link to="/form" className="link">&nbsp;Form&nbsp;</Link>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes> 
    </div>
    </Router>

  );
}

export default App;
