import React from 'react';
import{ history } from '../router/AppRouter';
import { Link } from 'react-router-dom';
import WorkoutContext from '../context/workoutContext';


const LandingPage = () => {
    const items = localStorage.getItem('workouts');
	if(items !== null){
		history.push('/dashboard');
	}

        return(
            < WorkoutContext.Provider>
            <div className='landing--container'>
            <div className='container'>
            <h1><i class="fas fa-dumbbell"></i><i class="fas fa-dumbbell"></i>Gainz</h1>
            <span>Workout Randomizer</span>
            <Link className='button__landing button__reset' to='dashboard'>Get Started</Link>
    
        </div>

            </div>
        </WorkoutContext.Provider>
        );

};

export default LandingPage;