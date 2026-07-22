import React from "react"
import "./Folder.css"

function Folder({el, updateFolder}) {
    return (
        <div className="folder">
            <input
                value={el.title}
                type="text"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => updateFolder(el.id, e.target.value)}
            />
        </div>
    );
}

export default Folder