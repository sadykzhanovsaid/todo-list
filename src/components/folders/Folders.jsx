import React from "react"
import "./Folders.css"

function Folders({isMenu, setIsMenu}) {
    return (
        <div className={`folders ${isMenu ? "active" : ""}`}></div>
    );
}

export default Folders