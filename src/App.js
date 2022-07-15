import logo from './assets/logo.svg';
import './App.css';
import { PatternList } from './patterns/pattern-list.tsx';

function App() {
  return (
    <div className="app">

      <header className='app-header'>
        <img className='app-header__logo' src={ logo} height="50px" width="50px" alt="Origami Crane"/></header>
      <PatternList />
    </div>
  );
}

export default App;
