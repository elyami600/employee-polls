import { useState } from "react"
import { connect } from "react-redux"


const NewQuestion = (props) => {
    console.log("NewQuestion :" , props)
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return(
        <div>
             <h3>Create a New Poll</h3>
             <h4>Would you rather...</h4>
            <form className="create-new-poll" onSubmit={handleSubmit}>
                <input 
                 type="text" 
                 name="optionOne"
                 value={inputs.optionOne} 
                 onChange={handleChange}
                 placeholder="Enter option one.."/>

                <h3>Or</h3>

                <input
                type="text" 
                name="optionTwo"
                value={inputs.optionTwo} 
                onChange={handleChange}
                placeholder="Enter option two.."/>

                <button className="btn" type="submit" >Submit</button>

            </form>
        </div>
    )
}
export default connect()(NewQuestion)