import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <Component url='http://localhost:7070/data' />
      <Component url='http://localhost:7070/error' />
      <Component url='http://localhost:7070/loading' />
    </div>
  );
}

export default App;
