const ResultsGrid = ({ resultsArr }) => {
  return (
    <div className="results-grid">
      {resultsArr.length > 0 ?
        resultsArr.map(result => (
          <p key={result.UNITID}>{result.INSTNM}</p>
        ))
      : <p>No Results</p>
      }
    </div>
  );
}

export default ResultsGrid;