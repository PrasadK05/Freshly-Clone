import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Heading from './Components/Heading';
import Home from './Pages/Home';
import Bot from './Components/Bot';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <Home/>
      {/* <Bot/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
