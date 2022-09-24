import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     App
    <Router>
      <Navbar/>

    </Router>
    </div>
  );
}

export default App;
