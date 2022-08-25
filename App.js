import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Title from './components/Title.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Title/>
      <About/>
    </div>
  );
}

export default App;
