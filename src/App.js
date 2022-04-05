import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './cpmponents/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>

    </div>
  );
}

export default App;
