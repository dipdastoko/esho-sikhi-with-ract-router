import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './cpmponents/Header/Header';
import Contact from '../src/cpmponents/Contact/Contact'
import About from './cpmponents/About/About';
import Services from './cpmponents/Services/Services';
import NotFound from './cpmponents/NotFound/NotFound';
import Home from './cpmponents/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
