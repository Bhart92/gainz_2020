import React from 'react';
import Header from '../components/Header';

const HelpPage = () => (
    <div className='container'>
                 <Header />
                 <h1 className='help--h1'>Heres how this works:</h1>
        <section className='help'>
            
        <div className='help--list-container'>
            <ol>
                <li>Select a muscle group from the dropdown box. Then click the 'Generate' button.</li>
                <li>Click 'Save' on each workout you wish to add to your worksouts list.</li>
                <li>Click 'Add to List' button when all desired workouts are saved. Multiple muscle groups can be added.</li>
                <li>Click the 'Saved Workouts' link in the navigation bar.</li>
                <li>Click the 'Save List' button if workouts list looks okay.</li>
                <li>Once the 'Save List' button is pressed your workout list will remain if the page is refreshed, or closed. You can set your workouts up on your mobile device and open them up when you're at the gym. If you're unsure on how to do a specific workout then click the 
                    'Tutorial' button for a quick demonstration video.</li>
                <li>Click the 'Reset' button to reset your saved workouts and return to the dashboard to start over.</li>
            </ol>
        </div>
        </section>

    </div>
);


export default HelpPage;