import { createContext, useReducer } from "react";
import img from "../asset/img";

const AppContext = createContext({});
const AppInitialSate = {
    name: "Fall Limited Edition Sneakers",
    price: "125.00",
    discount: "50",
    oldPrice: "250.00",
    wantToBuy: 1,
    data: [
        {
            id: "00000",
            img: img.imageProduct1,
        },
        {
            id: "00001",
            img: img.imageProduct2,
        },
        {
            id: "00002",
            img: img.imageProduct3,
        },
        {
            id: "00003",
            img: img.imageProduct4,
        },
    ],
    cart: [],

    currentIndex: 0,
    isPreviewerModalOpen: false,
};

function AppReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART": {
            let cart = state.cart;
            const foundIndex = cart.findIndex((item) => item.id === payload.id);

            foundIndex !== -1
                ? (cart[foundIndex] = payload)
                : cart.push(payload);

            return { ...state, cart };
        }

        case "REMOVE_TO_CART": {
            let cart = state.cart;
            cart.splice(payload, 1);

            return { ...state, cart };
        }

        case "UPDATE_WANT_TO_BUY":
            return { ...state, wantToBuy: payload };

        case "SET_CURRENT_INDEX":
            return { ...state, currentIndex: payload };

        case "TOGGLE_PREVIEWER_MODAL":
            return { ...state, isPreviewerModalOpen: payload };

        default:
            return state;
    }
}

function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, AppInitialSate);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
