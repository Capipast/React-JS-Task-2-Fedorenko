import {humans} from "./humans.js";
import {search} from "./search.js";

const showResults = async (field, value) => {
    console.log(field, value);
    const found = await search(humans, field, value);

    if (found.length > 0) {
        found.forEach(f => {
            console.log(f.greeting() + `,`, f.getInfo(`gender`));
        });
    }
    return found;
}

showResults(`name`, `Alisia`);
showResults(`name`, `Antoine`);
showResults(`age`, 24);
showResults(`age`, 28);
showResults(`weight`, 78);
showResults(`weight`, 64);
showResults(`name`, `Claude`);
showResults(`name`, `Jake`);
showResults(`age`, 21);
showResults(`age`, 38);
showResults(`weight`, 74);
showResults(`weight`, 81);