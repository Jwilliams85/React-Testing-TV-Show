import React from 'react'
import { render, fireEvent, wait, queryAllByTestId } from '@testing-library/react'
//import { fetchShow as fetchShow} from './api/fetchShow'
import App from './App';

test ("successfully renders data from api", () => {
    //render app which will show Select Season button
    const { getByRole } = render (<App />)

    //To query for elements first thing you should try using is getByRole
    const button = getByRole ('heading', { name: /Fetching data/i})

    
    //click on the Select Season button- fetching message is rendered 
    //-API call is initiated

    //Components waits for API then renders data that is returned

})