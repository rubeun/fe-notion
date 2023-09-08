
const ResultCard = ({ uniData }) => {
  const { INSTNM:uniName, CITY:uniCity, STABBR:uniState, INSTURL:uniURL } = uniData;

  return (
    <div className="result-card">
      <p className="uni-location">{uniCity}, {uniState}</p>
      <p className="uni-name">{uniName}</p>
      <p className="uni-url"><a href={`https://${uniURL}`}>{uniURL}</a></p>
    </div>
  );
}

export default ResultCard;