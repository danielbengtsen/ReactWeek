import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const interval = 5;
let initialValue = 0;

function App() {
  // Check for localStorage
  if(localStorage.getItem("count") != null) 
  {
    initialValue = Number(localStorage.getItem("count"));
  } 

  return (
    <div className="App">
      <Counter initialValue={initialValue} interval={interval} />
    </div>
  );
}

export default App;
