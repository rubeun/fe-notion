import React, { useState } from 'react';
import './App.css';

const UNI_DATA = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';

const App = () => {
  const [uniData, setUniData] = useState([]);

  const initialUnivDataLoad = () => {
    try {
      fetch(UNI_DATA)
        .then(response => response.text())
        .then(responseText => console.log(responseText));
    } catch (error) {
      console.error("CSV Data failed to load", error);
    }
  }
  initialUnivDataLoad();
  return (
    <div className="App">
    </div>
  );
}

export default App;