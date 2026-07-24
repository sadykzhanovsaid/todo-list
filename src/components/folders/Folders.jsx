import React from "react"
import "./Folders.css"

import Add from "../../assets/add.svg?react"
import All from "../../assets/all.svg?react"
import Delete from "../../assets/delete.svg?react"

function Folders({
                     isMenu,
                     setIsMenu,
                     folders,
                     setFolders,
                     open,
                     setOpen,
                     category,
                     setCategory,
                     addFolder,
                     deleteFolder
                 }) {
    const color = ["#C9D1D3", "#42B883", "#64C4ED", "#FFBBCC", "#B6E6BD", "#C355F5", "#090119", "#FF6464"]

    function randomColor() {
        if (color.length === 1) return color[0]

        let newColor

        do {
            newColor = color[Math.floor(Math.random() * color.length)]
        } while (folders.at(-1) && newColor === folders.at(-1).color)

        return newColor
    }

    return (
        <div className={`folders ${isMenu ? "active" : ""}`}>
            {folders.length >= 1 ?
                <>
                    <button
                        className={`folders__all ${category === "all" ? "active" : ""}`}
                        tabIndex="1"
                        onClick={() => {
                            setCategory("all")
                            setIsMenu(!isMenu)
                        }}
                    >
                        <All className="folders__all-icon"/>
                        Все задачи
                    </button>

                    <div className="folders__list">
                        {folders.map((folder, index) => {
                            return (
                                <button
                                    key={folder.id}
                                    className={`folders__folder ${category === folder.id ? "active" : ""}`}
                                    tabIndex={index + 2}
                                    onClick={() => {
                                        setCategory(folder.id)
                                        setIsMenu(!isMenu)
                                    }}
                                >
                                    <div
                                        className="folders__folder-color"
                                        style={{backgroundColor: folder.color}}
                                    ></div>

                                    <p className="folders__folder-title">{folder.title || "_"}</p>

                                    <div className="folders__folder-delete">
                                        <Delete
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deleteFolder(folder.id)
                                            }}
                                        />
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </> : null
            }

            <button
                className="folders__add"
                onClick={() => {
                    if (window.innerWidth <= 480) {
                        addFolder({
                            id: Date.now(),
                            title: `Название папки ${folders.length + 1}`,
                            color: randomColor(),
                            todos: []
                        })
                        setIsMenu(!isMenu)
                    } else {
                        setOpen(!open)
                    }
                }}
            >
                <Add className="folders__add-icon"/>
                Добавить папку
            </button>

            {folders.length !== 0 ? <button className="folders__add" onClick={() => setFolders([])}>- clear</button> : null}
        </div>
    );
}

export default Folders