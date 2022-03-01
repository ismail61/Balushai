export default (property , data) => {
    let temp = {};
    for (let field in data) {
        temp[`${property}.` + field] = data[field];
    }
    return temp;
}