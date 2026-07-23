import React, {useState, useRef} from "react"
import "./Folder.css"

import Change from "../../../assets/change.svg?react"

function Folder({el, updateFolder, deleteFolder}) {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef(null);

    return (
        <div className="folder">
            <div className="folder__row">
                <input
                    ref={inputRef}
                    className={isFocus ? "editing" : ""}
                    value={el.title}
                    type="text"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    size={Math.min(Math.max(el.title.length, 1), 20)}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => updateFolder(el.id, e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Backspace" && el.title.trim() === "") {
                            deleteFolder(el.id);
                        }
                    }}
                    style={{
                        color: el.color,
                        caretColor: el.color
                    }}
                />

                <Change
                    className="folder__row-change"
                    onClick={() => inputRef.current?.focus()}
                />
            </div>

            <div className="folder__line"></div>
            <div></div>
        </div>
    );
}

export default Folder