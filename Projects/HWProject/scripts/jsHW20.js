//1) move all requests to firebase into promises loadCountries() loadCountries().then(countriesList => console.log(countriesList))
//2) read about promise.all and use it to fetch multiple initial requests
//3) handle errors from http and show feedback to the user ---> 404 (xhr.status) => alert('request failed')
//4) own projects: prepare scketches in paint for responsive layout

//1)move all requests to firebase into promises loadCountries() loadCountries().then(countriesList => console.log(countriesList))
const loadCountries = () =>{

const xhrForCountrys = new XMLHttpRequest();
xhrForCountrys.open("get", 'https://country-list-a1543-default-rtdb.europe-west1.firebasedatabase.app/');
xhrForCountrys.send();
xhrForCountrys.addEventListener('load', () => 

function showCountyes(){
    const container = document.querySelector()
}
}

showCountyes();


//3) handle errors from http and show feedback to the user ---> 404 (xhr.status) => alert('request failed')


