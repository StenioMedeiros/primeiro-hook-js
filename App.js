import './App.css';
import HelloWorld from './components/HelloWorld'
import ContClick from './components/ContClick';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <ContClick/>
      <SayMyName nome='Stênio'/>
    </div>
  );
}

export default App;
