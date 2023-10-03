import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/ClassComponents/NavbarComp';
import Carousel_2 from './Components/ClassComponents/Carousel_2';
import Compo_3 from './Components/ClassComponents/Compo_3';
import Compo_3Data from './Components/ClassComponents/Compo_3Data';
import Footer from './Components/ClassComponents/Footer';
import Compo_4 from './Components/ClassComponents/Compo_4';
import Compo_5 from './Components/ClassComponents/Compo_5';
import Compo_5Data from './Components/ClassComponents/Compo_5Data';
import Products from './Components/ClassComponents/Products';
import Location from './Components/ClassComponents/Location';
import Offer from './Components/ClassComponents/Offer';
import Compo_7 from './Components/ClassComponents/Compo_7';

function App() {
  return (
    
    <div className="App">
      <NavbarComp/>
      <Carousel_2/>
      <Compo_3Data />
      <Compo_4/>
      <Compo_5Data/>
      <Products/>
      <Compo_7/>
      <Location/>
      <Offer/>
      <Footer/>


    </div>
  );
}

export default App;
