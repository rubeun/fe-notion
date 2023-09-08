import styles from './ResultCard.module.css';

const ResultCard = ({ uniData }) => {
  const { INSTNM:uniName, CITY:uniCity, STABBR:uniState, INSTURL:uniURL } = uniData;

  return (
    <div className={styles.resultCard}>
      <p className={styles.uniLocation}>{uniCity}, {uniState}</p>
      <p className={styles.uniName}>{uniName}</p>
      <p className={styles.uniUrl}><a href={`https://${uniURL}`}>{uniURL}</a></p>
    </div>
  );
}

export default ResultCard;