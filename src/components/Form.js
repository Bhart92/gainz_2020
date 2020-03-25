import React, { useContext, useState} from 'react';
import DisplayedContext from '../context/displayedContext';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import WorkoutContext from '../context/workoutContext';
import SavedStatusContext from '../context/savedStatusContext';
import workoutReducer from '../reducers/workoutReducer';
//added
  const Form = (props) => {
    const {setSavedWorkouts} = useContext(SavedWorkoutsContext);
    const {setSubmit} = useContext(SavedStatusContext);
    const workouts = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'chest'
    });
    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    const inputValue = (e) => {
         const value = e.target.value; 
         setState(() => ({
             value
         }))
     };
     const onSubmit = (e) => {
        e.preventDefault();
        const workoutArray = workoutReducer(state, workouts);
        setCurrentWorkouts({...workoutArray});
        setSavedWorkouts(prevState => ({
            ...prevState
        }))
        setSubmit('');
     };
                return (
                    < WorkoutContext.Provider>
                        <div className='generate--form-container'>
                        <h1>Generate workouts</h1>
                        <form className='generate--form' onSubmit={onSubmit}>              
                            <select className='generate--form-select' value={state.value} onChange={inputValue}>
                                <option value='chest'>Chest</option>
                                <option value='back'>Back</option>
                                <option value='shoulders'>Shoulder</option>
                                <option value='biceps'>Biceps</option>
                                <option value='triceps'>Triceps</option>
                                <option value='forearms'>Forearms</option>
                                <option value='legs'>Legs</option>
                                <option value='abs'>Abs</option>
                                <option value='cardio'>Cardio</option>
                                <option value='kettlebells'>Kettlebells</option>
                            </select>
                            <button className='button button__generate' type='submit' disabled={currentWorkouts.state}>Generate Workouts</button>
                            
                        </form>
                </div>
                    </WorkoutContext.Provider>
        );
};

        export default Form;
    
