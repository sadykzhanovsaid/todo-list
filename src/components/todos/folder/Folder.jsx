import React, {useRef} from "react"
import "./Folder.css"

import {getTextWidth} from "../../../utils/getTextWidth.jsx"

import Change from "../../../assets/change.svg?react"
import Add from "../../../assets/add-v2.svg?react"

function Folder({
                    folder,
                    setFolders,
                    category,
                    setCategory,
                    updateFolder
                }) {
    const textWidth = getTextWidth(folder.title || "")
    const inputWidth = Math.max(textWidth + 16, 40)
    const inputRef = useRef(null)

    function handleChangeClick(e) {
        e.stopPropagation()

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="folder">
            <div className="folder__title-block">
                <input
                    type="text"
                    style={{
                        width: `${inputWidth}px`,
                        color: folder.color,
                        caretColor: folder.color,
                        borderColor: folder.title.length === 0 ? folder.color : "transparent"
                    }}
                    ref={inputRef}
                    value={folder.title}
                    className="folder__title"
                    onChange={(e) => updateFolder(folder.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />

                <div
                    className="folder__change"
                    onClick={(e) => handleChangeClick(e)}
                >
                    <Change/>
                </div>
            </div>

            <div className="folder__line"></div>

            {category !== "all" ?
                <button
                    className="folder__add"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Add/>

                    Новая задача
                </button> : null
            }
        </div>
    );
}

export default Folder