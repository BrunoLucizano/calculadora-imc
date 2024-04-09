import React, { useState } from "react";
import CampoInput from "./input";
import BotaoCalcularIMC from "./botao";

const Formulario = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");
    const [erro, setErro] = useState("");

    const calcularIMC = () => {
        if (peso === "" || altura === "") {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2));

        if (imcCalculado < 18.5) {
            setClassificacao("MAGREZA");
        } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
            setClassificacao("NORMAL");
        } else if (imcCalculado >= 25.0 && imcCalculado <= 29.9) {
            setClassificacao("SOBREPESO");
        } else if (imcCalculado >= 30.0 && imcCalculado <= 39.9) {
            setClassificacao("OBESIDADE");
        } else {
            setClassificacao("OBESIDADE GRAVE");
        }

        setErro("");
        setAltura("");
        setPeso("");
    };

    const handlePesoChange = (evento) => {
        let valor = evento.target.value;
        valor = valor.replace(/[^\d]/g, "").slice(0, 3);
        setPeso(valor);
    };

    const handleAlturaChange = (evento) => {
        let valor = evento.target.value;
        valor = valor.replace(/[^\d]/g, "").slice(0, 3);
        setAltura(valor);
    };

    return (
        <form className="formulario">
            <CampoInput className="input"
                tipo="text"
                placeholder="Peso"
                valor={peso}
                onChange={handlePesoChange}
            />
            <CampoInput
                tipo="text"
                placeholder="Altura"
                valor={altura}
                onChange={handleAlturaChange}
            />
            <BotaoCalcularIMC onClick={calcularIMC} />
            <p>
                {erro && <span style={{ color: "red" }}>{erro}</span>}
                {imc !== 0 && (
                    <span>
                        Seu IMC é: {imc} - {classificacao}
                    </span>
                )}
            </p>
        </form>
    );
};

export default Formulario;
