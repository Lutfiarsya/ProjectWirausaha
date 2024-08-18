
import { useRef } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Profile from './Profile';

function App() {
  const Home = useRef(null)
  const Menu = useRef(null)
  const Contact = useRef(null)
  return (
    <div className="App">
      <Navbar Home={Home} Menu={Menu} Contact={Contact}/>
      <Profile Home={Home} MenuScroll={Menu} ContactScroll={Contact}/>
    </div>
  );
}

export default App;
