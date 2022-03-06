import { QuestionAnswer } from "../mongodb/models"

export const createQuestionAnswer = async (data) => {
    try {
        const newQuestionAnswer = await new QuestionAnswer(data)
        return await newQuestionAnswer.save()
    } catch (err) {
        console.log(err)
    }
}

export const getSingleQuestionAnswer = async (query) => {
    try {
        return await QuestionAnswer.findOne(query)
    } catch (err) {
        console.log(err)
    }
}

export const getAllQuestionAnswers = async () => {
    try {
        return await QuestionAnswer.find({})
    } catch (err) {
        console.log(err)
    }
}

export const updateQuestionAnswer = async (query, data) => {
    try {
        return await QuestionAnswer.updateOne(query, { $set: data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteQuestionAnswer = async (query) => {
    try {
        return await QuestionAnswer.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}