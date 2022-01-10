import './App.css';
import JokeGenerator from './components/JokeGenerator';
import Todos from './components/Todos';

function App() {
  return (
    <div className='app'>
      <JokeGenerator />
      <Todos />
    </div>
  );
}

export default App;
