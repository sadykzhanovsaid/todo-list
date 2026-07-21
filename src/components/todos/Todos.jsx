import React from "react"
import "./Todos.css"

import Empty from "../empty/Empty.jsx"

function Todos({isMenu, setIsMenu}) {
    return (
        <div onClick={() => setIsMenu(!isMenu)} className={`todos ${isMenu ? "" : `active`}`}>
            <Empty isMenu={isMenu}/>
        </div>
    );
}

export default Todos