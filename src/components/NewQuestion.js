import { useState } from "react"
import { connect } from "react-redux"
import { handleAddQuestionPoll } from "../actions/questions"



const NewQuestion = (props) => {
    console.log("NewQuestion :" , props)
    const [textOptionOne, setTextOptionOne] = useState("");
    const [textOptionTwo, setTextOptionTwo] = useState("");
   
   

  const handleChangeOptionOne = (e) => {
    const textOptionOne = e.target.value;

    setTextOptionOne(textOptionOne);
  };


  const handleChangeOptionTwo = (e) => {
    const textOptionTwo = e.target.value;

    setTextOptionTwo(textOptionTwo);
  };


    const handleSubmit = (e) => {
        e.preventDefault();
        setTextOptionOne("")
        setTextOptionTwo("")

    }
    return(
        <div className="center">
      
             <h3 className="center">Create a New Poll</h3>
             <h4 className="center">Would you rather...</h4>
            <form className="create-new-poll" onSubmit={handleSubmit}>
                <textarea
                placeholder="Enter first option..."
                value={textOptionOne}
                onChange={handleChangeOptionOne}
                className="textarea"
                maxLength={120}
                />

                <h3>Or</h3>

                <textarea
                placeholder="Enter second option..."
                value={textOptionTwo}
                onChange={handleChangeOptionTwo}
                className="textarea"
                maxLength={120}
                />

                <button className="btn" type="submit" disabled={textOptionOne === "" || textOptionTwo === ""} > Submit</button>

            </form>
        </div>
    )
}
export default connect()(NewQuestion)