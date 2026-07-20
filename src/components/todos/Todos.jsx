import React from "react"
import "./Todos.css"

function Todos({isMenu, setIsMenu}) {
    return (
        <div onClick={() => setIsMenu(!isMenu)} className={`todos ${isMenu ? "" : "active"}`}></div>
    );
}

export default Todos