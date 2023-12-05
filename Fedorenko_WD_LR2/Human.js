export class Human {
    constructor(_name, _age, _weight, _gender) {
        this.name = _name;
        this.age = _age;
        this.weight = _weight;
        this.gender = _gender;
    }
    greeting() {
        return `Hi!`;
    }
    getInfo(prop) {
        if (prop !== null) {
            return this[prop];
        } else {
            JSON.stringify(this);
        }
    }
}