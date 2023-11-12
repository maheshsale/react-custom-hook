import './App.css';
import useRandomColor from './useRandomColor';

function App() {
  const {color, changeColor} = useRandomColor();
  return (
    <div className="App" style={{width:"100vw", height:"100vh", backgroundColor:"#" + color}}>
      <button className="color-changer" onClick={() => changeColor()}>Change Color</button>
    </div>
  );
}

export default App;
