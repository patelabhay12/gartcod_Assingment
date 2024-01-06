import './App.css';
import Home from './Components/Home';
import IMG1 from './assets/bgimage.svg';
function App() {
  return (
    <div className="App">
      <img src={IMG1} alt="" className='image' />
      <div className="body">

        <Home />
      </div>
    </div>
  );
}

export default App;
