import React, { Component, StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Pages/main';
import About from './Pages/about';
import Modules from './Pages/modules';
import Settings from './Pages/settings';
import FAQ  from './Pages/faq';
import Helpers from './Pages/helpers';
import ModuleForm from './Pages/moduleform';
import HelperForm from './Pages/helperform';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
          <div>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/modules' element={<Modules/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/faq' element={<FAQ/>} />
            <Route path='/helpers' element={<Helpers/>} />
            <Route path='/moduleform' element={<ModuleForm/>} />
            <Route path='/helperform' element={<HelperForm/>} />
          </Routes>
          </div>
      </>
    );
  }
}

export default App;