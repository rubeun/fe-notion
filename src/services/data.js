/**
 * Converts a CSV string into an array of objects
 * @param {string} csvData One large string of comma separated values
 * @returns {array} Array of Objects
 */
const convertCSVtoObjArr = csvData => {
  let resultArr = [];

  // # Split data into array of strings, first string being the headers #
  const csvDataArr = csvData.toString().split("\n");

  // # Get Headers as Keys # 
  const jsonKeys = csvDataArr[0].toString().split(",");

  // # Parse CSV value strings into corresponding key values # 
  for (let i = 1; i < csvDataArr.length; i++) {
    const valuesArr = csvDataArr[i].split(",");
    let valuesObj = {};
    for (let j = 0; j < jsonKeys.length; j++) {
      valuesObj[jsonKeys[j]] = valuesArr[j];
    }
    resultArr.push(valuesObj);
  }
  return resultArr;
}

export default convertCSVtoObjArr;