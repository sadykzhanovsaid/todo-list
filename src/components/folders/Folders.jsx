import React from "react"
import "./Folders.css"

import Add from "../../assets/add.svg?react"
import All from "../../assets/all.svg?react"
import Delete from "../../assets/delete.svg?react"

function Folders({isMenu, setIsMenu}) {
    return (
        <div className={`folders ${isMenu ? "active" : ""}`}>
            <button className="folders__all" tabIndex="1">
                <All className="folders__all-icon"/>
                Все задачи
            </button>

            <div className="folders__list">
                <button className="folders__folder" tabIndex="1">
                    <div className="folders__folder-color"></div>
                    <p className="folders__folder-title">Покупки</p>
                    <Delete className="folders__folder-delete"/>
                </button>

                <button className="folders__folder" tabIndex="1">
                    <div className="folders__folder-color"></div>
                    <p className="folders__folder-title">Фронтенд</p>
                    <Delete className="folders__folder-delete"/>
                </button>

                <button className="folders__folder" tabIndex="1">
                    <div className="folders__folder-color"></div>
                    <p className="folders__folder-title">Фильмы и сериал</p>
                    <Delete className="folders__folder-delete"/>
                </button>

            </div>

            <button className="folders__add">
                <Add className="folders__add-icon"/>
                Добавить папку
            </button>
        </div>
    );
}

export default Folders