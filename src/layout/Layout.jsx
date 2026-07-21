import React, {useEffect} from "react"
import "./Layout.css"

import Folders from "../components/folders/Folders.jsx"
import Todos from "../components/todos/Todos.jsx"

function Layout({
                    folders,
                    setFolders,
                    open, setOpen,
                    category,
                    setCategory,
                    isMenu,
                    setIsMenu,
                    addFolder,
                    deleteFolder,
                }) {
    useEffect(() => {
        if (isMenu) {
            document.querySelector("body").classList.remove("menu")
            document.querySelector("body").classList.add("chat")
        } else {
            document.querySelector("body").classList.remove("chat")
            document.querySelector("body").classList.add("menu")
        }
    }, [isMenu])

    useEffect(() => {
        const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
            window.matchMedia("(display-mode: fullscreen)").matches ||
            window.navigator.standalone === true

        if (isStandalone) {
            document.querySelector("body").classList.add("is-webapp");
        }
    }, []);

    return (
        <div className="application">
            <Folders
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                folders={folders}
                setFolders={setFolders}
                open={open}
                setOpen={setOpen}
                category={category}
                setCategory={setCategory}
                addFolder={addFolder}
                deleteFolder={deleteFolder}
            />
            <Todos
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                folders={folders}
                setFolders={setFolders}
                category={category}
                setCategory={setCategory}
            />
        </div>
    );
}

export default Layout