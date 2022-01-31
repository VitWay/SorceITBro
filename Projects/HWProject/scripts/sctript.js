/**
 *  list of contries with properties (name, region: "Asia", "Europe",
 *  "North America",..., population, ect*/
 var Ukraine =
 {
     countryName: 'Ukraine',
     region: 'Europe',
     area: '603628',
     climate: 'continental',
     population: 41319838,
     politics: 'unotary semi-presidental republic',
     lenguage: 'Ukrainian',
 };
 var USA =
 {
     countryName: 'USA',
     region: 'Noth America',
     area: '3796742',
     climate: 'subtopical',
     population: 331893281,
     goverment: 'federal presidental constitutional republic',
     lenguage: 'English',
 };
 var Sweden = {
     countryName: 'Sweden',
     region: 'Europe',
     population: 9354462,
     climate: 'moderate',
     goverment: 'constitutional monarchy',
     lenguage: 'Swedish',
 };
 var Georgia = {
     countryName: 'Georgia',
     region: 'Asia',
     population: 3729500,
     climate: 'subtropical',
     goverment: 'unitary parliamentary republic',
     lenguage: 'Georgian',
 };
 
//1. show countries list details (name, population, region)
 function showCountyes () {
     for(let i=0; i < arrayNationalIndetificationInWorld.length; i++){
         console.log(document.querySelector('countryName' + 'population' + 'region'));
     }
 }