import logo from './logo.svg';
import './App.css';
import SecComp from './Components/FunctionComponents/SecComp';
import FirstComp from './Components/FunctionComponents/FirstComp';
import ThrdComp from './Components/FunctionComponents/ThrdComp';
import ForthComp from './Components/FunctionComponents/ForthComp';
import FunctionComp2009 from './Components/FunctionComponents/FunctionComp2009';
import { ClassComp2009 } from './Components/ClassComponents/ClassComp2009';
import ClassComp2109 from './Components/ClassComponents/ClassComp2109';
import ClassComp2109_2 from './Components/ClassComponents/ClassComp2109_2';
import FunctionComp2109 from './Components/FunctionComponents/FunctionComp2109';
import FormHendeling2409 from './Components/FunctionComponents/FormHendeling2409';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageAndBase64__2709 from './Components/FunctionComponents/ImageAndBase64__2709';
import FormHendelingClass309 from './Components/ClassComponents/FormHendelingClass309';
import ClassLifeCycle from './Components/ClassComponents/ClassLifeCycle';
import C_04_10_LifeCycle1 from './Components/ClassComponents/C_04_10_LifeCycle1';
import { useState } from 'react';
import C_05_10_LifeCycle2 from './Components/ClassComponents/C_05_10_LifeCycle2';
import F_06_10_UseContext from './Components/FunctionComponents/F_06_10_UseContext';
import C_06_10_UseContext from './Components/ClassComponents/C_06_10_UseContext';
import F_09_10_Api1 from './Components/FunctionComponents/F_09_10_Api1';
import F_16_10_UseMemo from './Components/FunctionComponents/F_16_10_UseMemo';
import F_16_10_CallBack from './Components/FunctionComponents/F_16_10_CallBack';
import C_18_10_Api1 from './Components/ClassComponents/C_18_10_Api1';
import F_19_10_FormValidation from './Components/FunctionComponents/F_19_10_FormValidation';
import F_23_10_Routing1 from './Pages/F_23_10_Routing1';
import F_23_10_NevigationBar from './Pages/F_23_10_NevigationBar';
import F_23_10_Form from './Pages/F_23_10_Form';
import { BrowserRouter } from 'react-router-dom';
import F_23_10_Main from './Pages/F_23_10_Main';

function App() {
  const [name, setname] = useState('Jenish Lakkad')
  const [unMou, setunMou] = useState(true)
  const changeName = () =>{
    setname('Krisa Vasoya')
  }

  const doUnmounting = () =>{
    // if(unMou == true){
    //   setunMou(<C_05_10_LifeCycle2/>)
    // }
    // else{
    //   setunMou(true)

    // }
  }
  return (
    <>
      {/* <FirstComp/>
      <SecComp/>
      <ThrdComp/>
      <ForthComp/> */}
      {/* <FunctionComp2009/> */}
      {/* <ClassComp2009/> */}
      {/* <ClassComp2109/> */}
      {/* <ClassComp2109_2 name='Jenish'/> */}

      {/* <FunctionComp2109 name='Jenish'/> */}

      {/* Date:- 24/09/23 Sunday */}

      {/* <FormHendeling2409/> */}

      {/* <ImageAndBase64__2709/> */}

      {/* <FormHendelingClass309/> */}

      {/* <ClassLifeCycle/> */}

      {/* <C_04_10_LifeCycle1 changeName={changeName} name = {name}/> */}

      {
        unMou 
      }
      {/* <C_05_10_LifeCycle2/> */}

      {/* <button onClick={() =>doUnmounting()} className='text-center'>Clickme</button> */}

      {/* <F_06_10_UseContext/> */}

      {/* <C_06_10_UseContext/> */}

      {/* <F_09_10_Api1/> */}

      {/* <F_16_10_UseMemo/> */}

      {/* <F_16_10_CallBack/> */}

      {/* <C_18_10_Api1/> */}

      {/* <F_19_10_FormValidation/> */}

      {/* <F_23_10_Routing1/> */}

      {/* <F_23_10_NevigationBar/> */}

      {/* <BrowserRouter> */}
        {/* <F_23_10_Form/> */}
        <F_23_10_Main/>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
