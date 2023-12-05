export const search = (list, searchField, searchValue) => {

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