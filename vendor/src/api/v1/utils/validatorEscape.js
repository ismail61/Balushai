import validator from 'validator'
export default (obj) => {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) return;
    for (const property in obj) {
        console.log("from loop: ", property)
        obj[property] =  validator.escape(obj[property])
    }
    return obj;
}