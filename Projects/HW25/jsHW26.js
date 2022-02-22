// Person (adress, city, country, street, house), job(profession, experience)
class Person {
    constructor(adress, city, country, street, house, doHaveJob) {
        this.adress = adress || 'unknown';
        this.city = city;
        this.country = country;
        this.street = street;
        this.house = house;
        this._doHaveJob = doHaveJob;
    }
    job() {
        if (!this._doHaveJob.check()) {
            return `person have not a job`;
        }
        this._doHaveJob.haveJob();
        console.log(`This person have a job`);
    }
}


class DoHaveJob {
    check() {
        return true;
    }
    haveJob() { }
}

class Job extends DoHaveJob {
    constructor(profession, experience) {
        this.profession = profession;
        this.experience = experience;
        super();
    }
    check() {
        return this._profession;
    }
    haveJob() {
        if (!this.check()) {
            return `Don't have job!`;
        }
        console.log(`Have job!`);
    }

}
const Job = new Job('Guide', 12);
const personHaveJob = new Person('', 'IF', 'Ukraine', 'Main street', 12, true);;