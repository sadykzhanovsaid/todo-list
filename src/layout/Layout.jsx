import React, {useState} from "react"
import "./Layout.css"

import Folders from "../components/folders/Folders.jsx"
import Todos from "../components/todos/Todos.jsx"

function Layout() {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <div className="application">
            <Folders isMenu={isMenu} setIsMenu={setIsMenu}/>
            <Todos isMenu={isMenu} setIsMenu={setIsMenu}/>
        </div>
    );
}

export default Layout