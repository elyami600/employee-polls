import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receivevQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users,questions }) => {
            dispatch(receiveUsers(users));
            dispatch(receivevQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));


        })

    }

}
