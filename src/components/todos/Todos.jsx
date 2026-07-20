import React, {useEffect} from "react"
import "./Todos.css"

function Todos({isMenu, setIsMenu}) {
    useEffect(() => {
        if (!isMenu) {
            setTimeout(() => {
                document.querySelector(".todos").classList.toggle("over")
            }, 500)
        }
    }, [isMenu])
    return (
        <div onClick={() => setIsMenu(!isMenu)} className={`todos ${isMenu ? "" : `active`}`}></div>
    );
}

export default Todos