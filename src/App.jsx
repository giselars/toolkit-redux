import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter';


function App() {
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>count is { counter }</h3>
      <div className="card">
        <button onClick={ () => dispatch(increment()) }>
          Increment
        </button>
        <button onClick={ () => dispatch(decrement()) }>
          Decrement
        </button>
        <button onClick={ () => dispatch(incrementByAmount(3)) }>
          Incremnet by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
