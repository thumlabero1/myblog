import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sliders from './components/Sliders/Sliders';
import Footer from './components/footer/footer';
import Blur from './components/blur/blur';
function App() {
  return (
    <div className="App">
      <Blur/>
      <header>
      <Navbar />
      <Sliders />
      </header>
      <Footer />
    </div>
  );
}

export default App;
