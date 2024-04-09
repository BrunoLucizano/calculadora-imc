import React from "react";


const CampoInput = ({ tipo, placeholder, valor, onChange }) => {
    return (
        <input
            type={tipo}
            placeholder={placeholder}
            value={valor}
            onChange={onChange}
        />
    );
};

export default CampoInput;
