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
                   updateFolder,
                   addTodo
               }) {

    const folder = folders.find(folder => folder.id === category)

    return (
        <div
            onClick={() => {
                if (window.innerWidth <= 480) {
                    setIsMenu(!isMenu)
                }
            }}
            className={`todos ${isMenu ? "" : `active`} ${folders.length === 0 ? "empty" : ""}`}
        >
            {folders.length >= 1 ?
                <>
                    {category === "all" ?
                        <div className="todos__folders">
                            {folders.map((folder) => {
                                return <Folder key={folder.id} folder={folder} setFolders={setFolders} category={category} setCategory={setCategory} updateFolder={updateFolder} addTodo={addTodo}/>
                            })}
                        </div> : folder ? <Folder key={folder.id} folder={folder} setFolders={setFolders} category={category} setCategory={setCategory} updateFolder={updateFolder} addTodo={addTodo}/> : null}
                </> : <Empty/>
            }
        </div>
    );
}

export default Todos