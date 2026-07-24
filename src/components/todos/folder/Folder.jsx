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
                    updateFolder,
                    addTodo
                }) {
    const textWidth = getTextWidth(folder.title || "")
    const inputWidth = Math.max(textWidth + 16, 40)
    const titleRef = useRef(null)
    const addRef = useRef(null)
    const [isAddTodo, setIsAddTodo] = useState(false)
    const [title, setTitle] = useState("")

    function handleFocusTitle(e) {
        e.stopPropagation()

        if (titleRef.current) {
            titleRef.current.focus()
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (title.trim() === "") return

        addTodo(folder.id, {
            id: Date.now(),
            title,
            completed: false
        })

        setIsAddTodo(!isAddTodo)
        setTitle("")
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
                    ref={titleRef}
                    value={folder.title}
                    className="folder__title"
                    onChange={(e) => updateFolder(folder.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />

                <div
                    className="folder__change"
                    onClick={(e) => handleFocusTitle(e)}
                >
                    <Change/>
                </div>
            </div>

            <div className="folder__line"></div>

            {folder.todos.map(todo => {
                return <p key={todo.id}>{todo.title}</p>
            })}

            {category === "all" ? null :
                <>
                    {isAddTodo ?
                        <form
                            className="folder__add"
                            onSubmit={handleSubmit}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <input
                                autoFocus
                                type="text"
                                className="folder__add-input"
                                placeholder="Текст задачи"
                                value={title}
                                onChange={(e) => {
                                    const value = e.target.value

                                    setTitle(value.charAt(0).toUpperCase() + value.slice(1))
                                }}
                            />
                            <div className="folder__add-buttons">
                                <button className="folder__add-submit" type="submit">Добавить задачу</button>
                                <button
                                    className="folder__add-cancel"
                                    onClick={() => setIsAddTodo(!isAddTodo)}
                                >Отмена</button>
                            </div>
                        </form>
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