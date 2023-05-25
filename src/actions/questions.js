export  const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export function receivevQuestions(questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions,
    };
}
