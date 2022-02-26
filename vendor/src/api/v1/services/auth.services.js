const findOneUsingEmailOrPhoneNumber = async (model, data) => {
    try {
        return await model.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

const createUser = async (model, data) => {
    try {
        return await model.create(data)
    } catch (err) {
        console.log(err);
    }
}

export { findOneUsingEmailOrPhoneNumber, createUser };