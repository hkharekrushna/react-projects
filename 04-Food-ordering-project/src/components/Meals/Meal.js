import React, {Fragment} from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealSummary';

const Meals = (props) =>{

    return (

        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>

        </Fragment>
    );

};

export default Meals;