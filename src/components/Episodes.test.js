import React from 'react';
import { render } from '@testing-library/react'
import Episodes from './Episodes'

//what is the testing philosophy/framework we follow in our tests?
//arrange, act, and assert
test("re-render correctly with list of seasons", () => { 

    const episodesData =[]; 
//arrange (render the component and set up monck data)
const { rerende, getAllByTestIdr } = render(<Episodes episodes={[]} />)

//act (re-render the component with episodes data passes in)
rerender(<Episodes episodes = {episodesData}/>)



})