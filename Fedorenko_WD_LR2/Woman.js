import {Human} from "./Human.js";

export class Woman extends Human {
    constructor(_name, _age, _weight) {
        super(_name, _age, _weight);
        this.gender = `woman`;
    }
    greeting() {
        return super.greeting() + ` ` + this.getInfo(`name`);
    }
}