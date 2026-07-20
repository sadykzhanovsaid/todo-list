import React from "react"
import "./Layout.css"

import Folders from "../components/folders/Folders.jsx"
import Todos from "../components/todos/Todos.jsx"

function Layout() {
    return (
        <div className="application">
            <Folders/>
            <Todos/>
        </div>
    );
}

export default Layout