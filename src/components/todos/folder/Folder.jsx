import React, {useRef, useState} from "react"
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
    const [isAddTodo, setIsAddTodo] = useState(false)

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

            {category === "all" ? null :
                <>
                    {isAddTodo ?
                        <div
                            className="folder__add"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <input
                                type="text"
                                className="folder__add-input"
                                placeholder="Текст задачи"
                            />
                            <div className="folder__add-buttons">
                                <button className="folder__add-submit">Добавить задачу</button>
                                <button
                                    className="folder__add-cancel"
                                    onClick={() => setIsAddTodo(!isAddTodo)}
                                >Отмена</button>
                            </div>
                        </div>
                        :
                        <button
                            className="folder__add-hero"
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsAddTodo(!isAddTodo)
                            }}
                        >
                            <Add/>

                            Новая задача
                        </button>
                    }
                </>
            }
        </div>
    );
}

export default Folder