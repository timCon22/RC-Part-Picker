import React from "react";
import { Link } from "react-router-dom";
import PartList from "./PartList";
import "./style.css"

function Home(){
    return (
        <div className="title-border">
            <h1>Welcome to RC-Part-Picker</h1>
            <label htmlFor="rc">Search for a Traxxas part!</label>
            <br/>
            <PartList/>
        </div>
    )
}

export default Home