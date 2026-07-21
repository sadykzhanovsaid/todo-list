import React from "react"
import "./Folders.css"

function Folders({isMenu, setIsMenu}) {
    return (
        <div className={`folders ${isMenu ? "active" : ""}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, porro.
        </div>
    );
}

export default Folders