import React from "react";
import ReactDOM from "react-dom";
import Events from '../components/Events';
import {isTSAnyKeyword} from '@babel/types';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    const events=[{
        day:'October 9th 2021',
        time:'3 PM',
        entry:'XYZ',
        assigned:'XYZ'

    }]
    ReactDOM.render(<Events events={events} day='October 9th 2021'/>,div);
})