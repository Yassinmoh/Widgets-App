import './App.css';
import React,{ useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import items from './items.json'
import options from './options.json'



function App() {
  const [selected,SetSelected]=useState(options[0])
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={SetSelected}/>
    </div>
  );
}

export default App;
