import './App.css';
import React, { useState } from 'react'
import Navbar from './compnents/Navbar';
import TextForm from './compnents/TextForm';
import Alert from './compnents/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2b2b2b'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled", "success");
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="Text it UP" aboutText="About text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text it Up" mode={mode} />}></Route> */}
            <TextForm showAlert={showAlert} heading="Try Text it Up" mode={mode}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
