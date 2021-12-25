import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/App";
import { Previewer } from "../index";
import "./PreviewerModal.css";

export default function PreviewerModal() {
    const appContext = useContext(AppContext);

    return appContext?.isPreviewerModalOpen ? (
        <div className="previewerModal">
            <Previewer modal />
        </div>
    ) : null;
}
