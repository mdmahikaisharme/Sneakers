import React from "react";
import { MainLeft, MainRight } from "../index";
import "./Main.css";

export default function Main() {
    return (
        <main className="main">
            <div className="hold">
                <MainLeft />
                <MainRight />
            </div>
        </main>
    );
}
