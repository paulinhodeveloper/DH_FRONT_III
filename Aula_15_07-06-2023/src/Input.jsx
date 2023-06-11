import React, { useEffect } from "react";

function Input({ title = "indefinido", type = "text", value, fnOnChange, fnOnKeyUp }) {
    useEffect(() => {
        console.log("<Input /> foi montado");
    }, []);

    return (
        <div>
            <label>{title}</label>
            <input
                type={type}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
            />
        </div>
    );
}

export default Input;
