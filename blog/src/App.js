import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sliders from './components/Sliders/Sliders';
function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      <Sliders />
      </header>
    </div>
  );
}

export default App;
