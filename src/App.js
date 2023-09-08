import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import convertCSVtoObjArr from './services/data';
import Home from './routes/Home';
import NavBar from './components/NavBar/NavBar';

const UNI_DATA = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';

const App = () => {
  const [uniData, setUniData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const initialUnivDataLoad = () => {
    try {
      fetch(UNI_DATA)
        .then(response => response.text())
        .then(responseText => convertCSVtoObjArr(responseText))
        .then(convertedObjArr => {
          setUniData(convertedObjArr);
          setSearchResults(convertedObjArr);  
        });
    } catch (error) {
      console.error("CSV Data failed to load", error);
    }
  }

  const searchData = useCallback(searchValue => {
    const results = [...uniData].filter(data => 
      // Searches through University Names Only
      data.INSTNM.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  },[uniData]);

  useEffect(() => {
    initialUnivDataLoad();
  },[]);

  return (
    <div className="App">
      <NavBar />
      <Home searchData={searchData} searchResults={searchResults} />
    </div>
  );
}

export default App;
