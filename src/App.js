
import './App.css';
import NavBar1 from './componant/NavBar1';
import TextForm from './componant/TextForm';
import  { useState } from "react";
import Alert from './componant/Alert';


function App() {

  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)//alert is an object
  const showAlert=(message ,type)=>{
    setAlert({
      message:message,
      type:type
      
      
    })
    setTimeout(( ) => {
      setAlert(null)

    },1500);

  }
  const toggleMode=()=>
  {
    if(mode==='light'){
    setMode('dark')
    document.body.style.background='#042743'
    showAlert('Dark mode has been enabled','success')
    }
    else{
    setMode('light')
    document.body.style.background='white'
    showAlert('Light mode has been enabled','success')
    }

  }
  
  return (
   <>
   
        <NavBar1 Title= "TextUtility"  mode={mode} toggleMode={toggleMode}/>
        <Alert    alert={alert}/>
        <div>
            <TextForm  showAlert={showAlert} mode={mode}/>
         </div>
  </>
 
  )
}

export default App;
