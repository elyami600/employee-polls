
import { useEffect , Fragment} from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Question from './Question';
import Loging from './Login';
import LeaderBoard from './LeaderBoard';



const App = (props) => {
  console.log("App props :", props)
  useEffect(() => {
    props.dispatch(handleInitialData())

  },[])

  return (
    <Fragment>
  
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/new" element={<NewQuestion/>}/>
            <Route path="/leader" element={<LeaderBoard/>} />
            <Route path="/loging" element={<Loging/>} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading : authedUser === null,
})

export default connect()(App);
