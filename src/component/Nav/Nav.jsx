import React from "react";
import "./Nav.css";

export default function Nav({ children }) {
    return (
        <>
            <input type="checkbox" className="navToggler" id="navToggler" />
            <label htmlFor="navToggler"></label>

            {children}

            <nav className="nav">
                <a className="navLink" href="/">
                    Collections
                </a>
                <a className="navLink" href="/">
                    Men
                </a>
                <a className="navLink" href="/">
                    Women
                </a>
                <a className="navLink" href="/">
                    About
                </a>
                <a className="navLink" href="/">
                    Contact
                </a>
            </nav>
        </>
    );
}
