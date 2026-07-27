import React, {useRef, useState, useLayoutEffect} from "react"
import "./Todo.css"

import Completed from "../../../assets/completed.svg?react"
import Delete from "../../../assets/delete.svg?react"

function Todo({todo, toggleTodo, folder, deleteTodo}) {
    const titleRef = useRef(null)
    const [isMultiLine, setIsMultiLine] = useState(false)

    useLayoutEffect(() => {
        if (titleRef.current) {
            setIsMultiLine(titleRef.current.offsetHeight > 16)
        }
    }, [todo.title])

    return (
        <div
            key={todo.id}
            className={`todo ${isMultiLine ? "start" : "center"}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                onClick={() => toggleTodo(folder.id, todo.id)}
                className={`todo__completed ${todo.completed ? "completed" : ""}`}
            >
                <Completed/>
            </div>

            <p className="todo__title" ref={titleRef}>{todo.title}</p>

            <div className="todo__delete" onClick={() => deleteTodo(folder.id, todo.id)}>
                <Delete/>
            </div>
        </div>
    );
}

export default Todo