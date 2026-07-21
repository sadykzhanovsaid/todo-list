import React from "react"
import "./Folders.css"

import Add from "../../assets/add.svg?react"
import All from "../../assets/all.svg?react"
import Delete from "../../assets/delete.svg?react"

function Folders({isMenu, setIsMenu, folders, open, setOpen, category, setCategory, deleteFolder}) {
    return (
        <div className={`folders ${isMenu ? "active" : ""}`}>
            {folders.length >= 1 ?
                <>
                    <button className={`folders__all ${category === "all" ? "active" : ""}`} tabIndex="1" onClick={() => {
                        setCategory("all")
                        setIsMenu(!isMenu)
                    }}>
                        <All className="folders__all-icon"/>
                        Все задачи
                    </button>

                    <div className="folders__list">
                        {folders.map((folder) => {
                            return <button key={folder.id} className={`folders__folder ${category === folder.id ? "active" : ""}`} tabIndex="1" onClick={() => {
                                setCategory(folder.id)
                                setIsMenu(!isMenu)
                            }}>
                                <div className="folders__folder-color" style={{backgroundColor: folder.color}}></div>
                                <p className="folders__folder-title">{folder.title}</p>
                                <Delete className="folders__folder-delete" onClick={(e) => {
                                    e.stopPropagation();
                                    deleteFolder(folder.id)
                                }}/>
                            </button>
                        })}
                    </div>
                </> : null
            }

            <button className="folders__add" onClick={() => setOpen(true)}>
                <Add className="folders__add-icon"/>
                Добавить папку
            </button>
        </div>
    );
}

export default Folders