import React, {useState} from "react"
import "./Create.css"

import Close from "../../assets/close.svg?react"

function Create({
                    open,
                    setOpen,
                    addFolder
                }) {
    const [color, setColor] = useState("#C9D1D3")
    const [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") return;

        addFolder({
            id: Date.now(),
            title,
            color,
            todos: []
        });

        setOpen(false);
        setTitle("");
    }

    return (
        <form className={`create ${open ? "active" : ""}`} onSubmit={handleSubmit}>
            <Close className="create__close" onClick={() => {
                setOpen(false)
                setTitle("")
            }}/>

            <input
                type="text"
                onChange={(e) => {
                    const value = e.target.value

                    setTitle(value.charAt(0).toUpperCase() + value.slice(1))
                }}
                value={title}
                className="create__input"
                placeholder="Название папки"
            />

            <div className="colors">
                <div style={{backgroundColor: "#C9D1D3"}} className={`color ${color === "#C9D1D3" ? "active" : ""}`}
                     onClick={() => setColor("#C9D1D3")}></div>
                <div style={{backgroundColor: "#42B883"}} className={`color ${color === "#42B883" ? "active" : ""}`}
                     onClick={() => setColor("#42B883")}></div>
                <div style={{backgroundColor: "#64C4ED"}} className={`color ${color === "#64C4ED" ? "active" : ""}`}
                     onClick={() => setColor("#64C4ED")}></div>
                <div style={{backgroundColor: "#FFBBCC"}} className={`color ${color === "#FFBBCC" ? "active" : ""}`}
                     onClick={() => setColor("#FFBBCC")}></div>
                <div style={{backgroundColor: "#B6E6BD"}} className={`color ${color === "#B6E6BD" ? "active" : ""}`}
                     onClick={() => setColor("#B6E6BD")}></div>
                <div style={{backgroundColor: "#C355F5"}} className={`color ${color === "#C355F5" ? "active" : ""}`}
                     onClick={() => setColor("#C355F5")}></div>
                <div style={{backgroundColor: "#09011A"}} className={`color ${color === "#09011A" ? "active" : ""}`}
                     onClick={() => setColor("#09011A")}></div>
                <div style={{backgroundColor: "#FF6464"}} className={`color ${color === "#FF6464" ? "active" : ""}`}
                     onClick={() => setColor("#FF6464")}></div>
            </div>

            <button type="submit" className="create__submit">Добавить</button>
        </form>
    );
}

export default Create