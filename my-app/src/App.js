import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }
  const toggle = (cls) =>{
    removeBodyClasses()
    // console.log(cls)
    document.body.classList.add("bg-"+cls)
  }

  const toggleMode = () =>{
    // removeBodyClasses()
    // console.log(cls)
    // document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      setInterval(()=>{
        document.title = "TextUtils - Dark Mode"
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils Lite Mode"
      }, 1500);
    } else {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Router>
      <Navbar Navbar="RatanRana" mode={mode} toggleMode={toggleMode} toggle={toggle} />
      <Alert alert={alert}/>
      <div className='container'>
        <Routes>
          <Route path='/about' element={<About mode={mode}/> }  />
          <Route path='/' element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Remove Extra Space ..." mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
