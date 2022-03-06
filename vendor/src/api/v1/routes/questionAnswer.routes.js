import { questionAnswerController } from "../controllers";
import { tryCatchHandle } from "../utils";

function questionAnswerRoutes(app) {

    // QuestionAnswer's CRUD Operation
    app.get('/vendor/questionAnswers', tryCatchHandle(questionAnswerController().getAllQuestionAnswers));
    app.get('/vendor/questionAnswer/:id', tryCatchHandle(questionAnswerController().getSingleQuestionAnswer));
    app.post('/vendor/create-questionAnswer', tryCatchHandle(questionAnswerController().createQuestionAnswer));
    app.patch('/vendor/update-questionAnswer/:id', tryCatchHandle(questionAnswerController().updateQuestionAnswer));
}

export { questionAnswerRoutes }