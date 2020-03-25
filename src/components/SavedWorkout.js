import React, {useContext, useEffect} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import uuid from 'uuid';

const SavedWorkout = (props) => {
	useEffect(() => {
  const generatedWorkouts = document.getElementsByClassName('saved--workout-details');
        const workoutsArray = Array.from(generatedWorkouts)
        let delay = -.1;
        workoutsArray.forEach((item) => {
            delay += .05;
            item.classList.add('active')
            item.style.transitionDelay = `${delay}s`;

        })
	})
	const {savedWorkouts} = useContext(SavedWorkoutsContext);
	const savedWorkout = Object.entries(savedWorkouts);
	const items = localStorage.getItem('workouts');
	const itemObject = JSON.parse(items);
	let workoutArray;
    if(items != null || savedWorkout > workoutArray){
		workoutArray = Object.entries(itemObject)
		if(savedWorkout > workoutArray){
			workoutArray = Object.entries(savedWorkouts)
		}
    } else{
		workoutArray = Object.entries(savedWorkouts)
    }

	return(
		<div className='saved--workout-wrapper'>
            {workoutArray.map((workout, i) => {
									if(i % 2 === 0){
										return (
											<p key={uuid()} className='saved--workout-details'> {workout[0]}</p>
										);
									} else{
										return (
											<a href={workout[0]}key={uuid()} className='saved--workout-details'>Tutorial</a>
										);
									}
			})}	
		</div>
	);
};

export default SavedWorkout;