import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import items from './items.json'



function App() {
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

export default App;
