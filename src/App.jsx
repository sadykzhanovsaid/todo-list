import React, {useState, useRef} from "react"
import "./App.css"

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
    const [dragX, setDragX] = useState(0);       // Текущий сдвиг в пикселях
    const [isSwiping, setIsSwiping] = useState(false);

    const startXRef = useRef(0);
    const maxShift = 280; // Максимальная ширина открытия меню в px

    // --- ОБРАБОТКА СВАЙПА (TOUCH EVENTS) ---
    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
        setIsSwiping(true);
    };

    const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startXRef.current;

        // Если меню закрыто — тянем только вправо
        if (!isOpen) {
            if (diffX >= 0 && diffX <= maxShift) {
                setDragX(diffX);
            }
        } else {
            // Если меню открыто — тянем влево для закрытия
            const newX = maxShift + diffX;
            if (newX >= 0 && newX <= maxShift) {
                setDragX(newX);
            }
        }
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        // Если протянули больше чем на половину — фиксируем состояние
        if (dragX > maxShift / 2) {
            setIsOpen(true);
            setDragX(maxShift);
        } else {
            setIsOpen(false);
            setDragX(0);
        }
    };

    // Вычисляем процент открытия от 0 до 1
    const progress = dragX / maxShift;

    // Рассчитываем значение scale (от 0.95 до 1) и затемнения (от 0.6 до 0)
    const sidebarScale = 0.95 + progress * 0.05;
    const overlayOpacity = 0.6 * (1 - progress);
    const borderRadius = progress * 24;

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false);
            setDragX(0);
        } else {
            setIsOpen(true);
            setDragX(maxShift);
        }
    };


    return (
        <>
            <div
                style={{
                    background: '#000000',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >

                {/* 1. БОКОВОЕ МЕНЮ (НА МЕСТЕ, МАСШТАБИРУЕТСЯ ИЗ 0.95 В 1) */}
                <aside
                    className={`animated-drawer ${isSwiping ? 'is-swiping' : ''}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '75%',
                        height: '100%',
                        color: '#fff',
                        padding: '40px 20px',
                        boxSizing: 'border-box',
                        zIndex: 1,
                        transform: `scale(${sidebarScale})`,
                        transformOrigin: 'center left',
                    }}
                >
                    {/* Затемняющий слой (убирается при открытии) */}
                    <div
                        className={`animated-drawer ${isSwiping ? 'is-swiping' : ''}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            background: '#000000',
                            opacity: overlayOpacity,
                            pointerEvents: 'none',
                            zIndex: 10,
                        }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, fontSize: '20px' }}>Gemini</h2>
                        <span onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '24px' }}>✕</span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                        <li style={{ padding: '12px 0', fontSize: '16px', color: '#ccc' }}>Новый чат</li>
                        <li style={{ padding: '12px 0', fontSize: '16px', color: '#ccc' }}>Поиск по чатам</li>
                        <li style={{ padding: '12px 0', fontSize: '16px', color: '#ccc' }}>Библиотека</li>
                    </ul>
                </aside>

                {/* 2. ОСНОВНОЙ ЭКРАН (СДВИГАЕТСЯ ВПРАВО) */}
                <main
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className={`animated-drawer ${isSwiping ? 'is-swiping' : ''}`}
                    style={{
                        transform: `translateX(${dragX}px)`,
                        borderRadius:` ${borderRadius}px`,
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        background: '#131314',
                        color: '#fff',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: isOpen || dragX > 0 ? '-15px 0 30px rgba(0,0,0,0.8)' : 'none',
                        touchAction: 'pan-y', // Разрешает вертикальный скролл страницы
                    }}
                >
                    {/* Шапка */}
                    <header style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <button
                            onClick={toggleMenu}
                            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, fontSize: '24px' }}
                        >
                            ☰
                        </button>
                    </header>

                    {/* Контент */}
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            justify: 'center',
                            alignItems: 'center',
                            userSelect: 'none'
                        }}
                    >
                        <h1 style={{ fontSize: '28px', fontWeight: '400', margin: 0 }}>С чего начнем?</h1>
                    </div>
                </main>

            </div>
            {/*<Layout/>*/}
            {/*<Create open={open} setOpen={setOpen}/>*/}
        </>
    )
}

export default App