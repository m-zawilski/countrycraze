import React, { useState } from "react";
import "./Searchbar.scss";

function Searchbar(props) {
    const [ subregions, setSubregions ] = useState([""]);
    const [ selectedSubregion, setSelectedSubregion ] = useState("");
    if(!Object.keys(props.regionsMapping).length){
        return null;
    }
    return (
        <div>
            <input 
                onChange={(e) => props.search(e.target.value)}
            />
            <select onChange={(e) => {
                let subregion = props.regionsMapping[e.target.value]["subregion"].sort();
                if(e.target.value != ""){
                    setSubregions(["", ...subregion]);
                } else {
                    setSubregions([""]);
                }
                setSelectedSubregion("");
                props.changeRegionFilter(e.target.value)
                props.changeSubregionFilter("")
            }}>
                {Object.keys(props.regionsMapping).sort().map((region, i) => {
                    return <option 
                        value={region}
                        key={i}
                    >{region ? region : "All"}</option>
                })}
            </select>
            <select 
                value={selectedSubregion}
                onChange={(e) => {
                    setSelectedSubregion(e.target.value);
                    props.changeSubregionFilter(e.target.value);
                }}
            >
                {subregions.map((subregion, i) => {
                    return <option 
                        value={subregion}
                        key={i}
                    >{subregion ? subregion : "All"}</option>
                })}
            </select>
            Sovereign 
            <input 
                type="checkbox"
                onChange={() => props.swapSovereignStates()}
            />
        </div>
    )
}

export default Searchbar;