import './App.css';
import { useEffect } from 'react';
import Header from './component/Header/Header';
import Employees from './component/Employees/Employees';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Employees></Employees>
    </div>
  );
}

export default App;
