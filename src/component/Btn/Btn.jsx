import React from "react";

export default function Btn({
    className = "",
    icon = null,
    txt = null,
    children = null,
    onClick = null,
    disabled = false,
}) {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {icon ? <img src={icon} alt="" /> : null}
            {txt}
            {children}
        </button>
    );
}
