import React, { useContext } from "react";
import { AppContext } from "../../context/App";
import { Btn } from "../index";
import img from "../../asset/img";
import "./Previewer.css";

export default function Previewer({ modal }) {
    const appContext = useContext(AppContext);

    const fSetCurrentIndex = (index) =>
        appContext?.dispatch({ type: "SET_CURRENT_INDEX", payload: index });

    const fPrevious = () => {
        const currentIndex =
            appContext?.currentIndex <= 0
                ? appContext?.data?.length - 1
                : appContext?.currentIndex - 1;

        fSetCurrentIndex(currentIndex);
    };

    const fNext = () => {
        const currentIndex =
            appContext?.currentIndex >= appContext?.data?.length - 1
                ? 0
                : appContext?.currentIndex + 1;

        fSetCurrentIndex(currentIndex);
    };

    const fOpenPreviewerModal = () => {
        if (!appContext?.isPreviewerModalOpen) {
            appContext?.dispatch({
                type: "TOGGLE_PREVIEWER_MODAL",
                payload: true,
            });
        }
    };

    const fClosePreviewerModal = () => {
        appContext?.dispatch({
            type: "TOGGLE_PREVIEWER_MODAL",
            payload: false,
        });
    };

    const fPreviewerItemClicked = (index) => {
        fSetCurrentIndex(index);
        fOpenPreviewerModal();
    };

    return (
        <div className={`previewer ${modal ? null : "previewerHome"}`}>
            <Btn
                className={"previewerClose"}
                icon={img.iconClose}
                onClick={fClosePreviewerModal}
            />

            <div className="previewerMain">
                <Btn
                    className={"previewerBtn"}
                    icon={img.iconPrevious}
                    onClick={fPrevious}
                />
                <img
                    className="previewerImg"
                    src={appContext?.data[appContext?.currentIndex]?.img}
                    alt=""
                />
                <Btn
                    className={"previewerBtn"}
                    icon={img.iconNext}
                    onClick={fNext}
                />
            </div>

            <div className="previewerPlaylist">
                {appContext?.data?.map((item, index) => (
                    <div
                        className={`previewerItem ${
                            appContext?.currentIndex === index
                                ? "previewerItemSelected"
                                : null
                        }`}
                        onClick={() => fPreviewerItemClicked(index)}
                        key={index}
                    >
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}
