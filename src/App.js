import './App.css';
import Header from './component/Header/Header';
import Employees from './component/Employees/Employees';

function App() {

  return (
    <div className="App">
      <Header></Header>
      {/* main body of employee details and selection */}
      <Employees></Employees>
    </div>
  );
}

export default App;
