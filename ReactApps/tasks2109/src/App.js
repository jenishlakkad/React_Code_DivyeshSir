import logo from './logo.svg';
import './App.css';
import Task2109 from './Components/Task2109';
import img1 from '../src/Assets/Images/1.jpg'
import img2 from '../src/Assets/Images/2.jpg'
import img3 from '../src/Assets/Images/3.jpg'
import img4 from '../src/Assets/Images/4.jpg'
import img21 from '../src/Assets/Images/21.jpg'
import img22 from '../src/Assets/Images/22.jpg'
import img23 from '../src/Assets/Images/23.jpg'
import img24 from '../src/Assets/Images/24.jpg'
import img31 from '../src/Assets/Images/31.jpg'
import img32 from '../src/Assets/Images/32.jpg'
import img33 from '../src/Assets/Images/33.jpg'
import img34 from '../src/Assets/Images/34.jpg'
import img41 from '../src/Assets/Images/41.jpg'
import img42 from '../src/Assets/Images/42.jpg'
import img43 from '../src/Assets/Images/43.jpg'
import img44 from '../src/Assets/Images/44.jpg'
import FormHendeling2409 from '../../first1809/src/Components/FormHendeling2409';

function App() {
  return (
    <div className="App">
      <Task2109 dis='HeadPhone' dis2 ="Phone" dis3='Cable'dis4='Powerbank'  title='Starting $99 | All your home Improvement needs' image={img1} image2={img2} image3={img3} image4={img4}/>
      <Task2109 dis='HeadPhone' dis2 ="Phone" dis3='Cable'dis4='Powerbank'  title='Starting $99 | All your home Improvement needs' image={img21} image2={img22} image3={img23} image4={img24}/>
      <Task2109 dis='HeadPhone' dis2 ="Phone" dis3='Cable'dis4='Powerbank'  title='Starting $99 | All your home Improvement needs' image={img31} image2={img32} image3={img33} image4={img34}/>
      <Task2109 dis='HeadPhone' dis2 ="Phone" dis3='Cable'dis4='Powerbank'  title='Starting $99 | All your home Improvement needs' image={img41} image2={img42} image3={img43} image4={img44}/>

      {/* <Task2109/> */}


    </div>
  );
}

export default App;
