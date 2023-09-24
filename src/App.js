import './App.css';
import * as React from 'react';
import Oneway from './components/oneway';
import RoundTrip from './components/roundtrip';
import Header from './components/header';
import Radio from '@mui/material/Radio';



function App() {

  const [selectedValue, setSelectedValue] = React.useState('OneWay');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value)
    console.log(selectedValue)
  };
  let name;
  if (selectedValue === 'OneWay') {
    name = <Oneway/>
  }
  else if (selectedValue === 'RoundTrip') {
    name = <RoundTrip/>
  }
  else if (selectedValue === 'MultiCity') {
    name = <h1>MultiCity</h1>
  }



  return (
    <div className="App">
      <Header />

      <div>
        <label>
          <Radio
            checked={selectedValue === 'OneWay'}
            onChange={handleChange}
            value="OneWay"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />OneWay</label>
        <label> <Radio
          checked={selectedValue === 'RoundTrip'}
          onChange={handleChange}
          value="RoundTrip"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />RoundTrip</label>
        <label> <Radio
          checked={selectedValue === 'MultiCity'}
          onChange={handleChange}
          value="MultiCity"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />MultiCity</label>


      </div>



      {
        name
      }
      
    </div>
  );
}

export default App;   