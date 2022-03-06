import mongoose from "mongoose"
import { createQuestionAnswer, deleteQuestionAnswer, getAllQuestionAnswers, getSingleQuestionAnswer, updateQuestionAnswer } from "../services"
import { error } from "../utils"
import { questionAnswerValidation } from "../validations"

const questionAnswerController = () => {
    return {

        // Add QuestionAnswer
        createQuestionAnswer: async (req, res) => {
            // const validation = QuestionAnswerValidation(req.body)
            // if(validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)
            const addedQuestionAnswer = await createQuestionAnswer(req.body)
            res.status(200).json(addedQuestionAnswer);
        },

        // Find single product by ID 
        getSingleQuestionAnswer: async (req, res) => {
            const QuestionAnswer = getSingleQuestionAnswer({_id: mongoose.Types.ObjectId(req.params.id)})
            res.status(200).json(QuestionAnswer)
        },

        // Get all QuestionAnswers
        getAllQuestionAnswers: async (req, res) => {
            const QuestionAnswers = await getAllQuestionAnswers()
            res.status(200).json(QuestionAnswers)
        },

        // Update single QuestionAnswer by ID
        updateQuestionAnswer: async (req, res) => {
            const validation = QuestionAnswerValidation(req.body)
            if(validation.error) return error().resourceError(res, validation.error?.message, 422)
            const updatedQuestionAnswer = await updateQuestionAnswer({_id: mongoose.Types.ObjectId(req.params.id)}, req.body)
            res.status(200).json(updatedQuestionAnswer)
        },

        // Delete single QuestionAnswer by ID
        deleteQuestionAnswer: async (req, res) => {
            const deletedQuestionAnswer = await deleteQuestionAnswer({_id: mongoose.Types.ObjectId(req.params.id)})
            res.status(200).json(deletedQuestionAnswer)
        }
    }
}

export { questionAnswerController }