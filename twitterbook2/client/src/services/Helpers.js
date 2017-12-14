export const createUrlPath = (arr) => {
    let str = '';
    str = arr.map((elem) => str.concat('/', elem));
    return str;
};
export const errorHandler = (error) => {
    console.log(error);
};