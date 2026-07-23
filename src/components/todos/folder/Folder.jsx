import React, {useRef, useState} from "react"
import "./Folder.css"

import Change from "../../../assets/change.svg?react"

function Folder({el, updateFolder, deleteFolder}) {
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef(null);
    const [wasEmpty, setWasEmpty] = useState(false);

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
                    onChange={(e) => {
                        const value = e.target.value;

                        updateFolder(el.id, value);
                        setWasEmpty(value === "");
                    }}

                    onKeyDown={(e) => {
                        if (e.key === "Backspace" && wasEmpty) {
                            deleteFolder(el.id);
                        }
                    }}
                    style={{
                        backgroundColor: "red",
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