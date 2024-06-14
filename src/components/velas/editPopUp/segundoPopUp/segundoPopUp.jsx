import check from "../../../../assets/MinhasVelas/check.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const SegundoPopUp = ({ callback, onClose }) => {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/MinhasVelas`;
        navigate(path);
    };

    const handleClosePopup = () => {
        if (onClose) {
            onClose(); // Chama a função de callback para fechar a popup
        }
    };

    return (
        <div className="next-popup-container">
            <button onClick={callback} className="fechar-vela">
                x
            </button>
            <div className="next-popup">
                <img alt="" className="check-icon" src={check} />
                <h3 className="check-h3">Vela alterada com sucesso!</h3>
                <p className="check-p">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing er sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid tempor incididunt...”
                </p>
                <button className="btn-vela24" onClick={callback} >
                    <span>Voltar para a página inicial</span>
                </button>
            </div>
        </div>
    );
};

export default SegundoPopUp;
