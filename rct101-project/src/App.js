import './App.css';
import Navbar from './Components/Navbar';
import Heading from './Components/Heading';
import Bot from './Components/Bot';
import Footer from './Components/Footer';
import AllRoutes from './Components/AllRoutes';



function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
