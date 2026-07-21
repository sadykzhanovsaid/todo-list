import React from "react"
import "./Todos.css"

import Empty from "../empty/Empty.jsx"

function Todos({isMenu, setIsMenu, folders, category}) {

    const folder = folders.find(folder => folder.id === category);

    return (
        <div onClick={() => setIsMenu(!isMenu)} className={`todos ${isMenu ? "" : `active`} ${folders.length === 0 ? "empty" : ""}`}>
            {folders.length >= 1 ?
                <>
                    {category === "all" ? folders.map((todos) => {
                        return <p key={todos.id}>{todos.title}</p>
                    }) : folder ? <p key={folder.id}>{folder.title}</p> : null}
                </> : <Empty/>
            }
        </div>
    );
}

export default Todos