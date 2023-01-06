
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const toggleMode=()=>{

    
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled","success")
      document.title='TextConvertor - Light Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Light mode has been enabled","success")
      document.title='TextConvertor - Dark Mode';
    }
  }
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1000);
}

  return (
    <>
    <Router>
<Navbar title="TextUtils" aboutText="AboutText" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Routes>
          <Route exact path='/about' element={  <About mode={mode}/>}></Route>
          <Route exact path="/home" element={<TextForm  showAlert={showAlert} heading="Enter the text" mode={mode}/> }>
          </Route>
        </Routes>
 
  </div>
  </Router>
    </> 
  );
}

export default App;
 