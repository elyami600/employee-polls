import { connect } from "react-redux"
import { formatDate } from "../utils/helper";
import '../App.css'
//import { formatQuestion } from "../utils/helper"
const Question = (props) => {
    console.log("Question porps: " , props)



   const {avatarURL, timestamp, id, author , optionOne  ,  optionTwo} = props.question;

    return (
        <div className="question">
          <div className="question-info">

            <h4>{author}</h4>
            <img src={avatarURL} alt={`Avatar of ${author}`} className="avatar" />
            <p>{ formatDate(timestamp)}</p>
            {/* <p>Option one: {optionOne.text}</p>
            <p>votes: {optionOne.votes}</p>
            <p>Option two: {optionTwo.text}</p>
            <p>votes: {optionTwo.votes}</p> */}
            <button>Show</button>
        
          </div>


        </div>
    )
}



const mapStateToProps = ({ authedUser, users, questions}, {id}) => {
    const question = questions[id];

    return {
        authedUser,
        question,
        users
    }

};
// const mapStateToProps = ({ authedUser, users, questions}, {id}) => {
//     const question = questions[id];

//     return {
//         authedUser,
//         question: formatQuestion(question, users[question.author], authedUser),
//     }

// };
export default  connect(mapStateToProps)(Question);