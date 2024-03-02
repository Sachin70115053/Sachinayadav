import React from "react";
import "./Navbar.css"


const Navbar=(props)=>{

    const filterData=props.filterData;


    return (
        <div className="Navbar">
            {
            filterData.map((data)=>{
                return<div className="button">{data}</div>
            })
        }
        </div>
        
    )
}

export default Navbar;