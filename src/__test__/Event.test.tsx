import React from "react";
import ReactDOM from "react-dom";
import Event from '../components/Event';
import {isTSAnyKeyword} from '@babel/types';
import {render} from '@testing-library/react'

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Event time='2 AM' entry='XYZ' assigned='XYZ'/>,div);
})

// it("renders a event correctly",()=>{
//     const {}
// })