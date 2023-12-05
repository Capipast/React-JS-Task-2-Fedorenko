import {Human} from "./Human.js";

export class Man extends Human {
    constructor(_name, _age, _weight) {
        super(_name, _age, _weight);
        this.gender = `man`;
    }
    greeting() {
        return super.greeting() + ` ` + this.getInfo(`name`) + ', ' + this.getInfo(`age`);
    }
}