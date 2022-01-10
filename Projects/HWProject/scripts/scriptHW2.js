//Домашня робота
/**
 * 1. Create a list of contries with properties (name, region: "Asia", "Europe",
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

var arrayNationalIndetificationInWorld = [Georgia, Sweden, Ukraine, USA, { countryName: 'Kurdustan', nationality: 'Kurd', region: 'Asia', population: 3000000 }];
/**
 * 2. Create a list wich will contain only countries in Europe
 *  and print it into console (.filter(), forEach() or for loop)
 */
console.log('-------use of the method forEach--------');

var filterArray = arrayNationalIndetificationInWorld.filter(function (item) {
    return item.region == 'Europe'
});

filterArray.forEach(function (item) {
    console.log(item.countryName);
});

/**
 * 3. Create a list wich will contain only names of countries like ("Ukraine", "USA", "Poland", "Germany")
 * (.map())
 */
var newArrayNat = arrayNationalIndetificationInWorld.map(function (item) {
    return 'Name country:' + item.countryName;
});
console.log(newArrayNat);

/**
 * 4. Add countries to the list + print to console
 */
arrayNationalIndetificationInWorld.push({ countryName: 'Poland', region: 'Europe' });
console.log(arrayNationalIndetificationInWorld.toString);

/**
 * 5. Remove some country from the list + print to console
 */
delete arrayNationalIndetificationInWorld[arrayNationalIndetificationInWorld - 1];
console.log(arrayNationalIndetificationInWorld);

/**
 * 6. Create an object person with properties like (name, surname, age) and create method for this object wich
 * will print details of object like (person .printDetails)
 */
const person = {
    name: ['Mike', 'Larson'],
    age: 19,
    gender: 'male',
    education: ['MIT', 'Hight school USA'],
    hobby: ['hiking', 'music'],
    detailsAboutPerson: function () {
        console.log('name ' + this.name + ' age ' + this.age
            + ' years old.\n' + this.name[0] + ' graduated ' + this.education[0] + ' and like ' + this.hobby);
    },
    introduce: function () {
        console.log('Hi! My name is ' + this.name[0] + ' my secondName ' + this.name[1]);
    }
};
person.detailsAboutPerson();
person.introduce();


