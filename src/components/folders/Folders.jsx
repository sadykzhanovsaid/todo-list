import React from "react"
import "./Folders.css"

import Add from "../../assets/add.svg?react"

function Folders({isMenu, setIsMenu}) {
    return (
        <div className={`folders ${isMenu ? "active" : ""}`}>
            <button className="folders__add">
                <Add className="folders__all-icon"/>
                Добавить папку
            </button>
        </div>
    );
}

export default Folders