import React from "react";
import "./Searchbar.scss";
import { REGION } from "../Constants";

function Searchbar(props) {
    return (
        <div>
            <input 
                onChange={(e) => props.search(e.target.value)}
            />
            <select onChange={(e) => props.changeRegionFilter(e.target.value)}>
                {Object.keys(REGION).map((region, i) => {
                    return <option 
                        value={region}
                        key={i}
                    >{region}</option>
                })}
            </select>
            Sovereign 
            <input 
                type="checkbox"
                onChange={() => props.swapSovereignStatesFilter()}
            />
        </div>
    )
}

export default Searchbar;