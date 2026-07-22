import React from "react"
import "./Todos.css"

import Empty from "../empty/Empty.jsx"
import Folder from "./folder/Folder.jsx"

function Todos({
                   isMenu,
                   setIsMenu,
                   folders,
                   setFolders,
                   category,
                   setCategory,
                   updateFolder
               }) {

    const el = folders.find(folder => folder.id === category);

    return (
        <div
            onClick={() => setIsMenu(!isMenu)}
            className={`todos ${isMenu ? "" : `active`} ${folders.length === 0 ? "empty" : ""}`}
        >
            {folders.length >= 1 ?
                <>
                    {category === "all" ?
                        <div className="todos__folders">
                            {folders.map((el) => {
                                return <Folder key={el.id} el={el} updateFolder={updateFolder}/>
                            })}
                        </div> : el ? <Folder key={el.id} el={el} updateFolder={updateFolder}/> : null}
                </> : <Empty/>
            }
        </div>
    );
}

export default Todos