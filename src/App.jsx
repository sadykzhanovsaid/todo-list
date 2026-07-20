import React, {useState, useEffect} from "react"
import "./App.css"

import Layout from "./layout/Layout.jsx"
import Create from "./components/create/Create.jsx"

function App() {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (open === false) {
            setTimeout(() => {
                setOpen(true)
            }, 2000)
        }
    }, [open])

    return (
        <>
            <Layout/>
            <Create open={open} setOpen={setOpen}/>
        </>
    )
}

export default App