import React, {useContext, useEffect} from 'react';
import { history } from '../router/AppRouter';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedStatusContext from '../context/savedStatusContext';
import SavedWorkout from './SavedWorkout';
import Header from './Header';


const SavedWorkoutDisplay = (props) => {
// eslint-disable-next-line no-use-before-define
	useEffect(() => {
		setSubmit({status: ''})
	}, [])
	const {submit, setSubmit} = useContext(SavedStatusContext);
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	const items = localStorage.getItem('workouts');
	const savedworkout = Object.values(savedWorkouts); 
	if(savedworkout.length <= 0 && items === null){
		history.push('/dashboard');

	}
	const handleSave = () => {
        if(savedworkout.length > 1){
            const localWorkouts = JSON.stringify(savedWorkouts);
			localStorage.setItem('workouts', localWorkouts);
			setSubmit({status: 'Workout List Saved!'})
        }
	};
	const handleReset = () => {
		localStorage.clear();
		setSavedWorkouts({});
	}

	return(
		<div className='container'>
			<Header />
			<h1 className='saved--title'>Saved Workouts</h1>
			<SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
				<div className='saved--container'>
				<div className='saved--title-container'>
					<div className='saved--title'><h2>Workouts</h2></div>
					<div className='saved--title'><h2>How do I do this?<i class="fab fa-youtube"></i></h2></div>
					<hr/>
				</div>
				<SavedWorkout />
				<div className='button--container'>
				<span>{submit.status}</span>
					<button className='button button__save' onClick={handleSave} disabled={savedworkout.length > 1 ? false : true}>
					Save List</button>
					<button className='button button__reset' onClick={handleReset}>Reset</button>
				</div>
				</div>

			</SavedWorkoutsContext.Provider>
		</div>
	);
};

export default SavedWorkoutDisplay;