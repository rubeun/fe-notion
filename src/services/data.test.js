import convertCSVtoObjArr from './data';

const mockData =  `UNITID,INSTNM,CITY,STABBR,INSTURL
1,Name 1,City 1,State 1,www.url1.com
2,Name 2,City 2,State 2,www.url2.com`

const mockReturn = [
  {
    UNITID: "1",
    INSTNM: "Name 1", 
    CITY: "City 1", 
    STABBR: "State 1", 
    INSTURL: "www.url1.com"
  },
  {
    UNITID: "2",
    INSTNM: "Name 2", 
    CITY: "City 2", 
    STABBR: "State 2", 
    INSTURL: "www.url2.com"
  }
]

describe('convertCSVtoObjArr', () => {
  it('returns correct array of objects', () => {
    expect(convertCSVtoObjArr(mockData)).toEqual(mockReturn);
  });
});