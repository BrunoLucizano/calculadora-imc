import React from "react";


const BotaoCalcularIMC = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick}>
            Calcular IMC
        </button>
    );
};

export default BotaoCalcularIMC;
