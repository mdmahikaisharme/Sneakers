import React, { useContext } from "react";
import { AppContext } from "../../context/App";
import { Btn, CartItem } from "../index";
import "./Cart.css";

export default function Cart() {
    const appContext = useContext(AppContext);

    return (
        <div className="cartHold">
            <input type="checkbox" className="cartToggler" id="cartToggler" />
            <label htmlFor="cartToggler">
                {appContext?.cart?.length > 0 ? (
                    <span className="cartNotification">
                        {appContext?.cart?.length}
                    </span>
                ) : null}
            </label>

            <div className="cart">
                <div className="cartHead">
                    <h4 className="cartTitle">Cart</h4>
                </div>

                <div className="cartMain">
                    {appContext?.cart?.length === 0 ? (
                        <p className="cartEmptyTxt">Your cart is empty.</p>
                    ) : null}

                    {appContext?.cart?.map((item, index) => (
                        <CartItem data={item} index={index} key={index} />
                    ))}
                </div>

                {appContext?.cart?.length > 0 ? (
                    <Btn className="cartCheckout" txt="Checkout" />
                ) : null}
            </div>
        </div>
    );
}
