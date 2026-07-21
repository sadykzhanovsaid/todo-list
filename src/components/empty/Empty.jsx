import React from "react"
import "./Empty.css"

function Empty({isMenu}) {
    return (
        <div className="empty">
            <p className={`empty__title ${isMenu ? "" : "active"}`}>Задачи отсутствуют.</p>
        </div>
    );
}

export default Empty