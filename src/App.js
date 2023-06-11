import './App.css';
import json from './json/etsy.json'
import Listing from './components/Listing'

function App() {
  let items = []
  items = json

  return (
    <div className="App">
      <Listing items={ items }/>
    </div>
  );
}

export default App;
