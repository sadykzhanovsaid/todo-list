import React, {useState} from "react"
import "./Folder.css"

function getTextWidth(text, font = "32px Inter") {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
    const context = canvas.getContext("2d")
    context.font = font

    const metrics = context.measureText(text)
    return Math.ceil(metrics.width)
}

function Folder({folder, updateFolder}) {
    const fontSpec = "32px Inter"
    const textWidth = getTextWidth(folder.title || "", fontSpec)
    const inputWidth = Math.max(textWidth + 16, 40)
    const [isFocus, setIsFocus] = useState(true)

    return (
        <div className="folder">
            <input
                type="text"
                style={{
                    width: `${inputWidth}px`,
                    color: folder.color,
                    caretColor: folder.color
                }}
                value={folder.title}
                className={`folder__title ${isFocus ? "truncated" : ""}`}
                onChange={(e) => updateFolder(folder.id, e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onFocus={() => setIsFocus(false)}
                onBlur={() => setIsFocus(true)}
            />
            {folder.id} {folder.title} {folder.color}
            <div className="folder__line"></div>
        </div>
    );
}

export default Folder