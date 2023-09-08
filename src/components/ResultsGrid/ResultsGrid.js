import ResultCard from "../ResultCard/ResultCard";
import styles from './ResultsGrid.module.css';

const ResultsGrid = ({ resultsArr }) => {
  return (
    <div className={styles.resultsGrid}>
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