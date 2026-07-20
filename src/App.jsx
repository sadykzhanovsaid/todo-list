import React, {useState} from "react"
import "./App.css"

import {motion, useMotionValue, useTransform} from "framer-motion";
import {Menu, X} from "lucide-react";

function App() {
    // const [open, setOpen] = useState(true)
    //
    // useEffect(() => {
    //     if (open === false) {
    //         setTimeout(() => {
    //             setOpen(true)
    //         }, 2000)
    //     }
    // }, [open])

    const [isOpen, setIsOpen] = useState(false);

    // Отслеживание позиции свайпа (от 0px до 280px)
    const x = useMotionValue(0);

    // 1. Анимация SCALE для БОКОВОГО МЕНЮ (от 0.95 до 1.0, без сдвига)
    const sidebarScale = useTransform(x, [0, 280], [0.95, 1]);

    // 2. Анимация ЗАТЕМНЕНИЯ меню (от 0.6 до 0 — затемнение уходит при открытии)
    const overlayOpacity = useTransform(x, [0, 280], [0.6, 0]);

    // 3. Скрупление углов основного экрана
    const mainBorderRadius = useTransform(x, [0, 280], [0, 24]);

    return (
        <>
            <div
                style={{background: "#000", height: "100vh", width: "100vw", overflow: "hidden", position: "relative"}}>

                {/* 1. БОКОВОЕ МЕНЮ (НА МЕСТЕ, ТОЛЬКО SCALE) */}
                <motion.aside
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "75%",
                        height: "100%",
                        color: "#fff",
                        padding: "40px 20px",
                        boxSizing: "border-box",
                        zIndex: 1,
                        scale: sidebarScale,             // Только масштабирование
                        transformOrigin: "center left",  // На месте, масштабируется от левого края
                    }}
                >
                    {/* Слой затемнения меню (убирается при открытии) */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "#000",
                            opacity: overlayOpacity, // 0.6 когда закрыто, 0 когда открыто
                            pointerEvents: "none",
                            zIndex: 10,
                        }}
                    />

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <h2 style={{margin: 0, fontSize: "20px"}}>Gemini</h2>
                        <X onClick={() => setIsOpen(false)} style={{cursor: "pointer"}}/>
                    </div>

                    <ul style={{listStyle: "none", padding: 0, marginTop: "30px"}}>
                        <li style={{padding: "12px 0", fontSize: "16px", color: "#ccc"}}>Новый чат</li>
                        <li style={{padding: "12px 0", fontSize: "16px", color: "#ccc"}}>Поиск по чатам</li>
                        <li style={{padding: "12px 0", fontSize: "16px", color: "#ccc"}}>Библиотека</li>
                    </ul>
                </motion.aside>

                {/* 2. ОСНОВНОЙ ЭКРАН (ОТЪЕЗЖАЕТ ВПРАВО, HEIGHT 100vh) */}
                <motion.main
                    drag="x"
                    dragDirectionLock
                    dragConstraints={{left: 0, right: 280}}
                    dragElastic={0.05}
                    style={{
                        x,
                        borderRadius: mainBorderRadius,
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        height: "100%", // Высота строго 100vh
                        background: "#131314",
                        color: "#fff",
                        touchAction: "pan-y",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: isOpen ? "-15px 0 30px rgba(0,0,0,0.8)" : "none",
                    }}
                    animate={{
                        x: isOpen ? 280 : 0,
                    }}
                    transition={{type: "spring", damping: 25, stiffness: 220}}
                    onDragEnd={(event, info) => {
                        if (info.offset.x > 80 || info.velocity.x > 300) {
                            setIsOpen(true);
                        } else {
                            setIsOpen(false);
                        }
                    }}
                >
                    {/* Хедер */}
                    <header style={{padding: "20px", display: "flex", alignItems: "center", gap: "15px"}}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 0}}
                        >
                            <Menu size={24}/>
                        </button>
                    </header>

                    {/* Контент */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justify: "center",
                            alignItems: "center",
                            userSelect: "none"
                        }}
                    ><h1 style={{fontSize: "28px", fontWeight: "400", margin: 0}}>С чего начнем?</h1>
                    </div>
                </motion.main>

            </div>
            {/*<Layout/>*/}
            {/*<Create open={open} setOpen={setOpen}/>*/}
        </>
    )
}

export default App