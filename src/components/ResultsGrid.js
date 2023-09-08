import ResultCard from "./ResultCard";

const ResultsGrid = ({ resultsArr }) => {
  return (
    <div className="results-grid">
      {resultsArr.length > 0 ?
        resultsArr.map(result => (
          <ResultCard uniData={result} key={result.UNITID} />
        ))
      : <p>No Results</p>
      }
    </div>
  );
}

export default ResultsGrid;