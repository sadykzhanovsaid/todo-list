import React from "react"
import "./Folder.css"

function Folder({folder}) {
    return (
        <div className="folder">
            {folder.id} {folder.title} {folder.color}
        </div>
    );
}

export default Folder