import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Anatomy from './components/Anatomy';
import Navbar from './components/Navbar';
import Biology from './components/Biology';
import Chemistry from './components/Chemistry';

function App() {
  return (
    <div className="App">
        < Navbar />
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo"/>
        < Profile />
        <div className='courses'> 
        < Biology />< Anatomy />  < Chemistry />
        </div>
      </header>
    </div>
  );
}

export default App;
