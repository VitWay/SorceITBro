/*
1) (для тих хто робить власний проект) - показати тему та базовий html проекту
2) створити фільтри для списку країн (зі старого завдання) які будуть фільтрувати по: регіону, назві
3)* створити калькулятор
4)** зробити підсвічування курсору та окреме підсвічування натискання миші
5) Почитати про різні події https://developer.mozilla.org/en-US/docs/Web/Events та спробувати різні події на власну ідею
*/


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

// 2.

function makeFiltersCounties(countryList){
    const filterNodes = document.querySelector('.region');
    for(let i = 0; i < countryList.length; i++){
    filterNodes[i].addEventListener(function(event){
const targetEle = event.target;
    showForRegion(
        countryList.filter((country) => country.region === 'Europe')
    );
    showForRegion(
        countryList.filter((country) => country.countryName === 'Ukraine')
    );
};
makeFiltersCounties();

