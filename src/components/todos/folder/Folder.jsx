import React, {useRef, useState} from "react"
import "./Folder.css"

import Change from "../../../assets/change.svg?react"
import Add from "../../../assets/add-v2.svg?react"

function getTextWidth(text, font = " 600 32px Montserrat") {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
    const context = canvas.getContext("2d")
    context.font = font

    const metrics = context.measureText(text)
    return Math.ceil(metrics.width)
}

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
                        caretColor: folder.color
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