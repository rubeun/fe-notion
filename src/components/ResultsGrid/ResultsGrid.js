import ResultCard from "../ResultCard/ResultCard";
import styles from './ResultsGrid.module.css';

const ResultsGrid = ({ resultsArr, loading }) => {
  return (
    <div className={styles.resultsGrid}>
      {!loading ?
        resultsArr.length > 0 ?
          resultsArr.map(result => (
            <ResultCard uniData={result} key={result.UNITID} />
          ))
        : <p>No Results</p>
      : <p>Loading...</p>
      }
    </div>
  );
}

export default ResultsGrid;