import React, {useState, useEffect} from "react"
import "./App.css"

import Layout from "./layout/Layout.jsx"
import Create from "./components/create/Create.jsx"

function App() {
    const [folders, setFolders] = useState(() => {
        const savedFolders= localStorage.getItem("folders");
        return savedFolders ? JSON.parse(savedFolders) : [];
    });
    const [category, setCategory] = useState(() => {
        const savedCategory = localStorage.getItem("category");
        return savedCategory ? JSON.parse(savedCategory) : "";
    });
    const [open, setOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(() => {
        const savedIsMenu = localStorage.getItem("isMenu");
        return savedIsMenu ? JSON.parse(savedIsMenu) : false;
    });

    useEffect(() => {
        localStorage.setItem("folders", JSON.stringify(folders));
        localStorage.setItem("category", JSON.stringify(category))
        localStorage.setItem("isMenu", JSON.stringify(isMenu))
    }, [folders, category, isMenu]);

    function addFolder(folder) {
        setFolders(prev => [...prev, folder]);
        setCategory(folder.id)
    }

    function deleteFolder(id) {
        setFolders(prev => prev.filter(folder => folder.id !== id));
        setCategory("all")
        setIsMenu(!isMenu)
    }

    return (
        <>
            <Layout isMenu={isMenu} setIsMenu={setIsMenu} folders={folders} setFolders={setFolders} open={open} setOpen={setOpen} category={category} setCategory={setCategory} deleteFolder={deleteFolder}/>
            <Create open={open} setOpen={setOpen} addFolder={addFolder}/>
        </>
    )
}

export default App