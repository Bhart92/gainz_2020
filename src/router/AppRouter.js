import React, {useState} from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import DashboardPage from '../components/DashboardPage';
import DisplayedContext from '../context/displayedContext';
import SavedStatusContext from '../context/savedStatusContext';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkoutDisplay from '../components/SavedWorkoutDisplay';
import HelpPage from '../components/HelpPage';

export const history = createHistory();

const AppRouter = () => {
    const [savedWorkouts, setSavedWorkouts] = useState({});
    const [currentWorkouts, setCurrentWorkouts] = useState({});
    const [submit, setSubmit] = useState({
      status: '',
      disabled: true
    });

    return (
          <Router history={history}>
          <div>
            <Switch>
            <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
            <Route path='/' component={LandingPage} exact={true} />
                            <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
                            <SavedStatusContext.Provider value={{submit, setSubmit}} >
                            <Route path='/dashboard' component={DashboardPage}/>
                            <Route path='/saved' component={SavedWorkoutDisplay}/>
                            <Route path='/help' component={HelpPage}/>
                            </ SavedStatusContext.Provider>
                            </ DisplayedContext.Provider >
                            </ SavedWorkoutsContext.Provider>
            </Switch>
          </div>
        </Router>
    )

            };

export default AppRouter;