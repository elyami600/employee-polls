

export  const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const  TOGGLE_QUESTION =  " TOGGLE_QUESTION"

export function receiveQuestions(questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions,
    };
}

