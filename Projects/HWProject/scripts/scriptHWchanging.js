/**
 * HOMEWORK
 * 1. change countries list use `` with ${} syntax
 * 2. read about dom events (building, capturing, target)
 * 3. create toggle button (when clicking on it - add class 'toggle', when cliking again - remove class)
 */

// change countries list use `` with ${} syntax
var countryList = [
    {
        countryName: 'Ukraine',
        region: 'Europe',
        area: '603628',
        climate: 'continental',
        population: 41319838,
        politics: 'unotary semi-presidental republic',
        lenguage: 'Ukrainian',
    },
    {
        countryName: 'USA',
        region: 'Noth America',
        area: '3796742',
        climate: 'subtopical',
        population: 331893281,
        goverment: 'federal presidental constitutional republic',
        lenguage: 'English',
    },
    {
        countryName: 'Sweden',
        region: 'Europe',
        population: 9354462,
        climate: 'moderate',
        goverment: 'constitutional monarchy',
        lenguage: 'Swedish',
    }
];
function showCountries(countryList) {
    const itemContainer = document.querySelector('#countries');
    if (!itemContainer) {
        alert('something is wrong!');
        return;
    }
    itemContainer.innerHTML = "";
    for (let i = 0; i < countryList.length; i++) {
        const country = countryList[i];
        const countryNode = document.createElement('article');
        countryNode.innerHTML = `
        // there is in inside node
        <section class = "details">
        <p class = "countryName">${country.countryName}</p>
        <p class = "climate">${country.climate}</p>
        <p class = "population">${country.population}</p>
        <p class = "language">${country.lenguage}</p>
        </section>
        `;
        countryNode.classList.add('country');
        countryNode.appendChild(countryNode);
    }
}
showCountries(countryList);

//create toggle button (when clicking on it - add class 'toggle', when cliking again - remove class)
function makeFiltersCounties