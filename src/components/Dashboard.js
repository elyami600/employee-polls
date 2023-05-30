import { connect } from "react-redux"
import Question from "./Question";
import '../App.css'

const Dashboard = (props) => {
    console.log("cDashboard props: ", props);

    return (
        <div>
           <h4 className="center">Employee Questions</h4>
           <ul className="dashboard-list">
            { props.questionIds.map((id) => (
                    <li key={id}>
                       <Question id={id}/> 
                    </li>
                ))
            }
           </ul>
        </div>
       
    )
}
const mapStateToProps = ( { questions }) => ({
    questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp -  questions[a].timestamp)
})

export default connect(mapStateToProps)(Dashboard)