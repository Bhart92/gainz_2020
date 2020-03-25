import React from 'react';
import Form from './Form';
import Header from '../components/Header';
import RandomDisplay from '../components/RandomDisplay';

const DashboardPage = (props) => {
    return(
        <div className='container'>
         <Header />
         <section className='dashboard--container'>
            <Form />
            <RandomDisplay />
         </section>
        </div>
        )
    };
export default DashboardPage;