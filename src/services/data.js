/**
 * Converts a CSV string into an array of objects
 * @param {string} csvData One large string of comma separated values
 * @returns {array} Array of Objects
 */
const convertCSVtoObjArr = csvData => {
  let resultArr = [];

  // # Split data into array of strings, first string being the headers #
  const csvDataArr = csvData.toString().split("\n");
  console.log(csvDataArr);
}

export default convertCSVtoObjArr;