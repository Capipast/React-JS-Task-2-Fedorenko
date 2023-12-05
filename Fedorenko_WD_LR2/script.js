const currentYear = (new Date()).getFullYear();

let greeting = (name, birthYear = 2000) => {
    const age = currentYear - birthYear;
    return `Я ${name}, мені ${age} років`;
}
console.log(greeting("Дмитро", 2004));
console.log(greeting("Дмитро"));

class Human {
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
class Man extends Human {
    constructor(_name, _age, _weight) {
        super(_name, _age, _weight);
        this.gender = `man`;
    }
    greeting() {
        return super.greeting() + ` ` + this.getInfo(`name`) + ', ' + this.getInfo(`age`);
    }
}
class Woman extends Human {
    constructor(_name, _age, _weight) {
        super(_name, _age, _weight);
        this.gender = `woman`;
    }
    greeting() {
        return super.greeting() + ` ` + this.getInfo(`name`);
    }
}

humans = [new Man(`John`, 26, 80),
    new Woman(`Martha`, 24, 68),
    new Man(`Curt`, 31, 82),
    new Man(`Adam`, 25, 78),
    new Woman(`Ingrid`, 34, 70),
    new Man(`Curt`, 42, 91),
    new Woman(`Isabella`, 29, 69),
    new Woman(`Alisia`, 44, 70),
    new Man(`Luke`, 18, 70),
    new Woman(`Luisa`, 54, 81),
    new Woman(`Betty`, 24, 49),
    new Man(`Claude`, 34, 78),
    new Man(`August`, 21, 76),
    new Woman(`Alisia`, 27, 69),
    new Man(`Curt`, 24, 75)
];

const search = (list, searchField, searchValue) => {

    const delay = 3000;

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const found = list.filter(l => l[searchField] === searchValue);

            if (found.length > 0) {
                resolve(found);
            } else {
                throw new Error(`За пошуком по searchField:searchValue нічого не знайдено!`);
            }
        }, delay);
    });

    promise.then((value) => {
        console.log(value);
    });
    promise.catch((error) => {
        console.error(error);
    });

    return promise;
}

search(humans, `age`, 24);
search(humans, `name`, `Alisia`);
search(humans, `age`, 28);