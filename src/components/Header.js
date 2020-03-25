import React, {useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';


const Header = () => {
    const {savedWorkouts} = useContext(SavedWorkoutsContext);
    const headerItems = localStorage.getItem('workouts');
    let headerArray;
    if(headerItems != null){
        headerArray = Object.entries(headerItems)
    } else{
        headerArray = Object.entries(savedWorkouts)
    }

    return(
    <header className='header'>
        <div><h1 className='header--h1'><Link to='dashboard'><i class="fas fa-dumbbell"></i><i class="fas fa-dumbbell"></i>Gainz</Link></h1></div>
        <div>
            <ul>
                <li>
                    <NavLink exact={true} to='help'>Help</NavLink>
                </li>
                {headerArray.length > 0 ? (                
                                        <li>
                                            <NavLink exact={true} to='saved'>Saved Workouts</NavLink>
                                        </li>) : 
                                        <li></li>}

                </ul>
          </div>
    </header>
    );
};


export default Header;
